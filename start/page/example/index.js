var formatLocation = require('./format-location.js')
var app = getApp()
var pageObject = {
    data: {
    },
    onReady: function () {
        wx.setNavigationBarTitle({
            title: '我的演示'
        })
    },
    goToCompass () {
        wx.navigateTo({
          url: './compass/compass'
        })
    },
    goToTrump () {
        wx.navigateTo({
          url: './trump/trump'
        })
    }
}

Page(pageObject)