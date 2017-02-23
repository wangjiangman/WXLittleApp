/*
* @Author: fiona
* @Date: 2017-01-16 16:55:27
* @Last Modified by:   fiona
* @Last Modified time: 2017-01-16 16:55:55
*/

// Usage:
/*let newData = require('./uetwx.js');

onLoad: function(params){

    let _this = this;
    let param = {
        API_URL: 'http://mobile.api.hunantv.com/channel/getWPDetail',
        data:{}
    };

    newData.result(param).then( data => {

        let datas = data.data.data;

        this.setData({
            trumpArr: data.data.data,
            bg : datas[0].picUrl
        })

    }).catch(e => {

        this.setData({
            loadtxt: '数据加载异常',
            loading: false
        })
        
    })

}*/

var Api = {

    //API_URL: To Set

    fetchApi : function(params) {

        var _this = this;

        return new Promise((resolve,reject) => {
            wx.request({
              url: params.API_URL,
              data:Object.assign({}, params.data),
              header: {
                'Content-Type': 'application/json'
              },
              success: resolve,
              fail: reject 
            })
        })

    },

    result : function (params) {

        var _this = this;

        return _this.fetchApi(params).then( res => res)

    }

}


module.exports = Api;
