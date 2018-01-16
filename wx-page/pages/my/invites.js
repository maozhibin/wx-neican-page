// pages/my/invites.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    qrcodeUrl: "../../images/invites.jpg",
    // invitelist: [{
    //   headImg: "http://img2.3lian.com/2014/gif/10/9/28.jpg",
    //   username: "Andy",
    //   invitetime: "2017-1-11"
    // },
    //   {
    //     headImg: "http://img2.3lian.com/2014/gif/10/9/28.jpg",
    //     username: "Andy",
    //     invitetime: "2017-1-11"
    //   },
    //   {
    //     headImg: "http://img2.3lian.com/2014/gif/10/9/28.jpg",
    //     username: "Andy",
    //     invitetime: "2017-1-11"
    //   }]
    invitelist:[]
  },
  toSaveImg: function (e) {
    wx.downloadFile({
      url: "../../images/invites.jpg",
      success: function (res) {
        let path = res.tempFilePath
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success(res) {
            console.log(res)
          },
          fail(res) {
            console.log(res)
          },
          complete(res) {
            console.log(res)
          }
        })
      }, fail: function (res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      userInfo: app.globalData.userInfo
    })

    var globalData = getApp().globalData;
    var url = globalData.baseServerUrl;
    
    wx.request({
      url: url + "/user/friendList?uid=" + app.globalData.userInfo.uid,
      method: 'POST',
      data: {},
      success: function (res) {
        console.log(res.data.object.list)
        that.setData({
          invitelist: res.data.object.list,
        })
        // app.globalData.userInfo = userInfo.data.object,
        //   wx.switchTab({
        //     url: 'my',
        //   })
        // wx.setStorageSync('rd3_success', userInfo.data.object); //存入本地以备后续使用
      }
    })
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