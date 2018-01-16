// pages/my/setting.js
var app = require("../../app.js");

Page({
  data: {
    auth_scope: ""
  },

  onLoad: function(option){
    this.setData({
      auth_scope: option.auth_scope
    })
  },

  auth:function(e){
    var thar = this;
    var auth_scope = this.data.auth_scope || "scope.userLocation";

    wx.getSetting({
      scope: auth_scope,
      success: function(res) {
        
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        if (!res.authSetting[auth_scope]) {
          wx.authorize({
            scope: auth_scope,
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              //thar.getLocation();
              wx.showToast({
                title: auth_scope+'授权完成',
                duration: 1000,
                mask: true
              })
            },
            fail(){
              wx.showToast({
                title: '请打开授权设置开启权限',
                duration: 1000,
                mask: true
              })
            }
          })
        }else{
          //thar.getLocation();
          wx.showToast({
            title: auth_scope + '已授权..',
            duration: 1000,
            mask: true
          })
        }
      }
    })
  },

  getLocation:function(){
      wx.getLocation({
        type: 'gcj02', //默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude
          wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28
          })
        }
      })
  },

  login: function () {
    //app.toLogin();
    wx.showModal({
      title: '消息提示',
      content: '获取用户信息失败，请重试',
    })
  },

  setting: function () {
    wx.openSetting({
      success: (res) => {
        console.info(res);
        
          res.authSetting = {
            "scope.userInfo": true,
            "scope.userLocation": true
         }
         
      }
    })
  },
})