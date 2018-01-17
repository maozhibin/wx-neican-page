
//获取应用实例
const app = getApp()

Page({
  data: {
    myself: '这里是我的介绍，这里是我的介绍，这里是我的介绍',
    // userInfo: {
    //   avatarUrl: 'https://pay.188jielan.net/zone/images/mayun.jpg',
    //   nickName: '小马哥-风清扬',
    //   uid: 100000,
    //   vip: 4,
    //   myself: '赵客缦胡缨⑵，吴钩霜雪明⑶。银鞍照白马，飒沓如流星⑷。十步杀一人，千里不留行⑸。事了拂衣去，深藏身与名。'
    // },
    userInfo:"",

  },

  onLoad: function (option) {
    console.log(option);
    var that = this;
    this.setData({
      userInfo: option
    })

    // console.log(option)
  },

  addFriend: function() {
    wx.showLoading({
      title: '加载中',
      mask: true
    });
    wx.navigateBack({
      
    })
  },

  toTwitter: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },
})
