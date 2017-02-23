var formatLocation = require('./format-location.js')
var pageObject = {
    data: {
        animationData: {},
        direction: 0,
        base: 0,
        hasLocation: false,
        location: {}
    },
    onReady: function () {
        var that = this
        this.animation = wx.createAnimation()
        wx.onCompassChange(function (res) {
            if (parseInt(res.direction) - parseInt(that.data.direction) < -180) {
                that.setData({
                    base: that.data.base + 360
                })
            } else if (parseInt(res.direction) - parseInt(that.data.direction) > 180){
                that.setData({
                    base: that.data.base - 360
                })
            }
            that.animation.rotate(360 - parseInt(res.direction) - that.data.base).step()
            that.setData({ 
                animationData: that.animation.export(),
                direction: parseInt(res.direction)
            })
        })

        wx.getLocation({
            success: function (res) {
                console.log(res)
                that.setData({
                    hasLocation: true,
                    location: formatLocation(res.longitude, res.latitude)
                })
            }
        })
    },
    rotate: function () {
        this.animation.rotate(90).step()
        this.setData({ 
            animationData: this.animation.export()
        })
    }
}

Page(pageObject)