// pages/my/myTwitterDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    twitter: {
        "headImg": "http://img2.3lian.com/2014/gif/10/9/25.jpg",
        "userName": "马伯庸",
        "uid": 30001212,
        "time": "4分钟前",
        "tabnum": 1,
        "titleImg": "http://www.chinesecio.com/m/photos/get_image/file/e4efc709633795fa9b9aa6c3b21d2fa3.jpg",
        "title": "独家|现金贷遭严厉监管 68家P2P平台或受影响（名单）",
        "content": "网贷之家不完全统计，目前有68家P2P网贷平台有现金贷业务，包括拍拍贷、信而富等平台，约占P2P网贷行业正常运营平台数量的3.44%（截至2017年10月底，P2P网贷行业正常运营平台数量为1975家。）详见下表1所示：",
        "zan": "Andy，李强，王强，Liu 等6人",
        "filetype":"../../../images/pdf.png",
        "filename": "统计名单",
        "reply": [{
          "replyUser": "左晓明",
          "replyContent": "对有拥有正规牌照的企业是利好"
        }]
      },
    focus: false,
    display: "none",
    inputValue: '',
     id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
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
  
  },
  toUser: function (e) {
    wx.navigateTo({
      url: '../../my/info?uid=' + e.target.dataset.uid,
    })
  },
  toDownfile: function (options) {
    wx.navigateTo({
      url: 'viewfile',
    })
  },
  toReply: function () {
    this.setData({
      focus: true,
      display: "flex"
    })
  },
})