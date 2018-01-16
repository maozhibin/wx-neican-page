//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    validatePhone: '验证手机号',
    myself:'这里是我的介绍，这里是我的介绍，这里是我的介绍',
    userOption:'升级vip',
    userInfo: null,
    hasUserInfo: false,
    userMobileBoolen:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  logout: function(){
    wx.redirectTo({
      url: 'login',
    })
  },
  
  onLoad: function () {
    if (app.globalData.userInfo.userMobile != ""){
      this.setData({
        userMobileBoolen: true
      })
    }
    if (!this.data.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  toUpgrade: function (options) {
    wx.navigateTo({
      url: 'upgrade',
    });
  },
  validatePhone: function (options) {
    wx.navigateTo({
      url: 'phonevalid',
    });
  },

  toMyTwitter: function (options) {
    console.info('toMyTwitter click >>>');
    wx.navigateTo({
      url: '../twitter/show/twitterSimpleList',
    });
  },

  toMyFolder: function (options) {
    wx.navigateTo({
      url: '../twitter/edit/addTwitter'
    })
  },

  toMyFriend: function (options) {
    wx.navigateTo({
      url: 'friends'
    })
  },
  toMyMessage: function (options) {
    wx.navigateTo({
      url: 'messages'
    })
  },

  toMyInvite: function (options) {
    wx.navigateTo({
      url: 'invites'
    })
  },

  toMyDrafts: function (options) {
    wx.switchTab({
      url: '../logs/logs'
    })
  },
  
  toMyPay: function(options) {
    wx.switchTab({
      url: '../logs/logs'
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
