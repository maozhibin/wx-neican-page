// pages/my/friends.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      friends:[{
        uid:12154512,
        addDate: "2017-12-11 21:25",
        avatarUrl: "http://img2.3lian.com/2014/gif/10/9/27.jpg",
        nickName : "小马哥"
      },
        {
          uid: 12154532,
          addDate: "2017-12-14 22:25",
          avatarUrl: "http://img2.3lian.com/2014/gif/10/9/29.jpg",
          nickName: "哈哈哈"
        },
         {
        uid: 12154512,
        addDate: "2017-12-11 21:25",
        avatarUrl: "http://img2.3lian.com/2014/gif/10/9/28.jpg",
        nickName: "Andy"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  showUser:function(e){
    wx.navigateTo({
      url: 'info?uid=' + e.target.dataset.uid,
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