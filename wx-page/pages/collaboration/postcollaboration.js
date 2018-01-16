// pages/collaboration/postcollaboration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _tab: 1,
    showModalStatus: 0,
    animationData: [],
    selectTypyModel: "协作者可读",
    typeClass: ["协作者可读", "所有人可读"],
    readRule: null,
    selectReadRule: "",
    markers: [{
      iconPath: "../../../images/icon/marker_red.png",
      id: 1,
      latitude: 30.194791,
      longitude: 120.180873,
      width: 35,
      height: 45
    }]
  },

  selectType: function () {
    var that = this;
    var itemList = this.data.typeClass;

    wx.showActionSheet({
      itemList: itemList,
      success: function (res) {
        console.log(JSON.stringify(res))
        console.log(res.tapIndex) // 用户点击的按钮，从上到下的顺序，从0开始
        that.setData({
          selectTypyModel: itemList[res.tapIndex]
        });
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  selectReadRule: function () {
    wx.navigateTo({
      url: '../my/friends',
    })
  },

  pushTwitter: function (options) {
    wx.switchTab({
      url: '../index/index',
    })
  },
  cancel: function (options) {
    wx.switchTab({
      url: '../index/index',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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