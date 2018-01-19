// pages/my/myTwitterSimpleList.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    twitterList: [{
    }]
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

  editTwitter: function () {
    wx.redirectTo({
      url: '../edit/addTwitter',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.flush();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  back: function(){
    wx.navigateBack({
      delta:1
    })
  },
  flush: function(){
    var globalData = getApp().globalData;
    var url = globalData.baseServerUrl + "?length=5";
    console.info('>>>>loading twitterList<<:' + url);
    var that = this;

    wx.request({
      url: url,
      data:{},
      success: function (res) {
        console.info('>>>> twitterList.size:' + res.data.length);
        console.info('>>>> twitterList.header<<:' + res.header);
        that.setData({
          twitterList: res.data
        });
        wx.hideLoading();
      }
    })
  },
  addTwitter: function () {
    //wx.showNavigationBarLoading() //在标题栏中显示加载

    var url = getApp().globalData.baseServerUrl + 'getTwitter.html?length=5';
    var that = this;
   
    wx.request({
      url: url,
      success: function (res) {
        let newwords = res.data.concat(that.data.twitterList);
        that.setData({
          words: newwords
        })
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
        wx.hideLoading();
      }
    })
  },

  onTwitterClick:function(option){
     wx.navigateTo({
       url: 'twitterDetail?id=' + option.currentTarget.dataset.id,
     })
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
    this.flush();
    console.info('>>>> page onPullDownRefresh..');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.addTwitter();
    console.info('>>>> page onReachBottom..');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})