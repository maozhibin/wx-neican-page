//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    twitterList: [],
    _tab: 1,
    voteList: [
      { name: 'USA', value: '美国', percent: 60},
      { name: 'CHN', value: '中国', percent: 20, checked: 'true' },
      { name: 'BRA', value: '巴西', percent: 0 },
      { name: 'JPN', value: '日本', percent: 0 },
      { name: 'ENG', value: '英国', percent: 0 },
      { name: 'TUR', value: '法国', percent: 0 },
    ],
    imgUrls: [
      {
        link: '/pages/index/index',
        url: 'http://iph.href.lu/750x270?text=pic'
      }, {
        link: '/pages/logs/logs',
        url: 'http://iph.href.lu/750x270?text=pic'
      }, {
        link: '/pages/test/test',
        url: 'http://iph.href.lu/750x270?text=pic'
      }
    ], 
    msg: [
      {
        "headImg": "http://img2.3lian.com/2014/gif/10/9/25.jpg",
        "userName": "马伯庸",
          "uid": 30001212,
          "time":"4分钟前",
          "tabnum": 1,
        "titleImg": "http://www.chinesecio.com/m/photos/get_image/file/e4efc709633795fa9b9aa6c3b21d2fa3.jpg",
        "title": "独家|现金贷遭严厉监管 68家P2P平台或受影响（名单）",
        "content": "网贷之家不完全统计，目前有68家P2P网贷平台有现金贷业务，包括拍拍贷、信而富等平台，约占P2P网贷行业正常运营平台数量的3.44%（截至2017年10月底，P2P网贷行业正常运营平台数量为1975家。）详见下表1所示：",
        "zan": "Andy，李强，王强，Liu 等6人",
        "reply": [{
            "replyUser":"左晓明",
            "replyContent":"对有拥有正规牌照的企业是利好"
        }]
      },
      {
        "headImg": "http://img2.3lian.com/2014/gif/10/9/17.jpg",
        "userName": "安迪斯晨风",
        "time":"6分钟前",
        "uid": 30001212,
        "tabnum": 1,
        "titleImg": "",
        "title": "独家|现金贷遭严厉监管 68家P2P平台或受影响（名单）",
        "content": "对有拥有正规牌照的企业是利好对有拥有正规牌照的企业是利好对有拥有正规牌照的企业是利好对有拥有正规牌照的企业是利好",
        "zan": "Andy，李强，王强，Liu 等6人",
        "reply": [{
              "replyUser":"左晓明",
              "replyContent":"对有拥有正规牌照的企业是利好"
          },
            {
                "replyUser":"左晓明",
                "replyContent":"对有拥有正规牌照的企业是利好"
            },
            {
                "replyUser":"左晓明",
                "replyContent":"对有拥有正规牌照的企业是利好"
            }]
      },
      {
        "headImg": "http://img2.3lian.com/2014/gif/10/9/28.jpg",
        "userName": "丹佛斯",
        "uid": 30001212,
        "time": "45分钟前",
        "tabnum": 2,
        "titleImg": "http://www.chinesecio.com/m/photos/get_image/file/e4efc709633795fa9b9aa6c3b21d2fa3.jpg",
        "title": "投票 | 你所在的平台受网贷平台影响很大吗？",
        "content": "网贷之家不完全统计，目前有68家P2P网贷平台有现金贷业务，包括拍拍贷、信而富等平台，约占P2P网贷行业正常运营平台数量的3.44%（截至2017年10月底，P2P网贷行业正常运营平台数量为1975家。）详见下表1所示：",
        "zan": "Andy，李强，王强，Liu 等6人",
        "reply": [{
          "replyUser": "左晓明",
          "replyContent": "对有拥有正规牌照的企业是利好"
        }]
      },
      {
        "headImg": "http://img2.3lian.com/2014/gif/10/9/17.jpg",
        "userName": "安迪斯晨风",
        "time": "6分钟前",
        "uid": 30001212,
        "tabnum": 3,
        "titleImg": "",
        "title": "独家|现金贷遭严厉监管 68家P2P平台或受影响（名单）",
        "content": "对有拥有正规牌照的企业是利好对有拥有正规牌照的企业是利好对有拥有正规牌照的企业是利好对有拥有正规牌照的企业是利好",
        "zan": "Andy，李强，王强，Liu 等6人",
        "reply": [{
          "replyUser": "左晓明",
          "replyContent": "对有拥有正规牌照的企业是利好"
        },
        {
          "replyUser": "左晓明",
          "replyContent": "对有拥有正规牌照的企业是利好"
        },
        {
          "replyUser": "左晓明",
          "replyContent": "对有拥有正规牌照的企业是利好"
        }]
      },
        ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000, 
    tag:1
  },
  
  onLoad: function () {
    
  },

  tabselect:function(e){
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
          list:[{

          }]
        }]
      })
  },

  toDetailPage:function(e){
    wx.navigateTo({
      url: '../twitter/show/twitterDetail?id=' + e.target.dataset.id,
    })
  },

  addTwitter: function () {
    wx.navigateTo({
      url: '../twitter/edit/addTwitter',
    })
  },
  
  toUser: function (e) {
    wx.navigateTo({
      url: '../my/info?uid=' + e.target.dataset.uid,
    })
  },

  toSetting: function(e){
    return {
      title: '微信小程序联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '/page/user?id=123'
    }
  }, 
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 
})
