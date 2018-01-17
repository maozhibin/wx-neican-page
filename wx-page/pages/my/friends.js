// pages/my/friends.js
var app = getApp();
var globalData = getApp().globalData;
var url = globalData.baseServerUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      friends:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      userInfo: app.globalData.userInfo
    })
    wx.request({
      url: url + "/user/friendList?uid=" + app.globalData.userInfo.uid,
      method: 'POST',
      data: {},
      success: function (res) {
        console.log(res.data.object)
        that.setData({
          friends: res.data.object.list,
        })
        // app.globalData.userInfo = userInfo.data.object,
        //   wx.switchTab({
        //     url: 'my',
        //   })
        // wx.setStorageSync('rd3_success', userInfo.data.object); //存入本地以备后续使用
      }
    })
  },

  showUser:function(e){
    wx.request({
      url: url + "/user/info?uid=" + e.currentTarget.dataset.uid,
      method: 'POST',
      data: {},
      success: function (userInfo) {
        var user = userInfo.data.object;
        wx.navigateTo({
          url: 'info?nickName=' + user.nickName + '&userAvatar=' + user.userAvatar + '&userSign=' + user.userSign,
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