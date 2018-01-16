//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    postList: [],
    msg: [
      { id: '10021',
        uid: '30001212',
        headImg: "http://img2.3lian.com/2014/gif/10/9/25.jpg",
        postname: "Andy",
        time: "4分钟前",
        readright:  "协作者可读",
        title:  "互联网+制造：迈向中国制造2025（修改版）",
        context: "本书分背景篇、产业篇、技术篇、国外篇、案例篇。背景篇从国民经济、技术、“互联网 ”渗透阶段以及与制造业融合的历程分析，描述新工业革命酝酿兴起的动因，提出互联网 制造是新工业革命的核心。",
        teamuser:"Andy，李强，王强，Liu 等6人"


      },
        { id: '10022',
            uid: '30001213',
            headImg: "http://img2.3lian.com/2014/gif/10/9/27.jpg",
            postname: "Amy",
            time: "22分钟前",
            readright:  "所有人可读",
            title:  "制造是新工业革命的核心",
            context: "本书分背景篇、产业篇、技术篇、国外篇、案例篇。背景篇从国民经济、技术、“互联网 ”渗透阶段以及与制造业融合的历程分析，描述新工业革命酝酿兴起的动因，提出互联网 制造是新工业革命的核心。",
            teamuser:"Andy，李强，王强，Liu 等6人"


        }
    ],
    tag: 1
  },

  onLoad: function () {

  },

  tabselect: function (e) {
    this.setData({
      _tab: e.target.dataset.num
    })
  },

  getTwitterList: function () {
    this.setData({
      twitterList: [{
        title: "金融",
        tab: "finance",
        count: 10,
        list: [{

        }]
      }]
    })
  },

  toDetailPage: function (e) {
    wx.navigateTo({
      url: '../twitter/show/twitterDetail?id=' + e.target.dataset.id,
    })
  },

  addCollaboration: function () {
    wx.navigateTo({
      url: 'postcollaboration',
    })
  },

  toUser: function (e) {
    wx.navigateTo({
      url: '../my/info?uid=' + e.target.dataset.uid,
    })
  },

  toSetting: function (e) {
    wx.navigateTo({
      url: '../my/setting?uid=' + e.target.dataset.uid,
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
