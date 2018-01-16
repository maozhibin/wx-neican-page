// pages/my/login.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseInfo: app.globalData.appInfo,
    authList: ["获取用户信息", "获取地理位置", "获取联系人信息", "获取本地存储"],
    userInfo:``,
  },

  //执行登录操作
  toLogin: function (e) {
    // 登录
    var globalData = getApp().globalData;
    // getApp().globalData.userInfo = e.detail.userInfo;
    var url = globalData.baseServerUrl;
    wx.login({
      success: res => {
        var that = this
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          //发起网络请求
          wx.request({
            url: url + "user/getOpenId?js_code=" + res.code,
            method: 'POST',
            data:{},
            success: function (resData) {
              if (resData.data.code==2){
              wx.request({
                url: url + "user/add?openId=" + resData.data.object.openId+"&nickName="+that.data.userInfo.nickName+"&userAvatar="+that.data.userInfo.avatarUrl,
                method: 'POST',
              })
              } else if (resData.data.code == 3){
                wx.request({
                  url: url + "/user/info?uid=" + resData.data.object.uid,
                  method: 'POST',
                  data: {},
                  success: function (userInfo) {
                    app.globalData.userInfo = userInfo.data.object,
                    wx.switchTab({
                      url: 'my',
                    })
                    wx.setStorageSync('rd3_success', userInfo.data.object); //存入本地以备后续使用
                  }
                })
            }
             
            }
          })

        } else {
          console.log('>>>>> 获取用户登录态失败！请刷新' + res.errMsg);
          wx.showModal({
            title: '提示',
            content: '获取用户登录态失败！请刷新',
            success: function (res) {
              if (res.confirm) {
                wx.redirectTo({
                  url: 'login',
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var app = getApp();
    // console.info(">>>>> userInfo:" + app.globalData.userInfo);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        app.globalData.userInfo = res.userInfo;
        that.setData({
          userInfo:res.userInfo,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          that.setData({
            userInfo: res.userInfo,
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})