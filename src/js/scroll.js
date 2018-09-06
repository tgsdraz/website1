var $ = require('jquery')
var domObj = require('./dom.js')
var mouseObj = require('./mousewheel.js')
module.exports = (function ($) {
    return {
        flag: true,
        liH: $('.content-wrapper').find('.item')[0].offsetHeight,
        index: 0,
        len: $('.content-wrapper').find('.item').length - 1,
        scroll: function () {
            var self = this
            console.log(self.liH)
            mouseObj.mouseWheel(window, 'mousewheel', function (e) {
                var event = e || window.event
                if (self.flag) {
                    self.flag = false
                    if (event.wheelDelta == -120) {
                        self.index++
                        if (self.index >= self.len) {
                            self.index = self.len
                            $('.page-down').find('i').removeClass('icon-shuangxiajiantou').addClass('icon-xiangshangjiantou')
                        }
                    } else {
                        self.index--
                        if (self.index <= 0) {
                            self.index = 0
                            $('.page-down').find('i').addClass('icon-shuangxiajiantou').removeClass('icon-xiangshangjiantou')
                        }

                    }
                    $('.content-wrapper').animate({
                        top: -self.index * self.liH
                    }, 1000, function () {
                        $('.order-item').eq(self.index).addClass('select').siblings().removeClass('select')
                        self.flag = true
                    })
                }

            }, false)
        },

        bindEvent: function () {
            var self = this
            if (self.flag) {
                $('.order-item').mouseenter(function () {
                    self.flag = false
                    var index = $(this).index()
                    self.index = index
                    if(self.index == self.len){
                        $('.page-down').find('i').removeClass('icon-shuangxiajiantou').addClass('icon-xiangshangjiantou')
                    }else{
                        $('.page-down').find('i').addClass('icon-shuangxiajiantou').removeClass('icon-xiangshangjiantou')
                    }
                    $(this).siblings().removeClass('select')
                    $(this).addClass('select')

                    $('.content-wrapper').animate({
                            'top': -index * self.liH
                        }, 1000,
                        function () {
                            self.flag = true
                        })
                })
            }

        },
        clickBtn:function(){
            var self = this;
            if(self.flag){
                $('.page-down').click(function(){
                    if($(this).find('i').hasClass('icon-shuangxiajiantou')){
                        self.index++
                        if(self.index == self.len){
                            $(this).find('i').removeClass('icon-shuangxiajiantou').addClass('icon-xiangshangjiantou')
                        }
        
                    }else{
                        self.index--
                        if(self.index == 0){
                            $(this).find('i').addClass('icon-shuangxiajiantou').removeClass('icon-xiangshangjiantou')
                        }
                        
                    }
                    $('.content-wrapper').animate({
                        top: -self.index * self.liH
                    }, 1000, function () {
                        $('.order-item').eq(self.index).addClass('select').siblings().removeClass('select')
                        self.flag = true
                    })
                })
            }
        }
    }
})($)