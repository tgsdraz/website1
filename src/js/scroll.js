var $ = require('jquery')
var domObj = require('./dom.js')
var mouseObj = require('./mousewheel.js')
var orderObj = require('./order.js')
module.exports = (function($){
    return {
        flag:true,
        liH:$('.content-wrapper').find('.item')[0].offsetHeight,
        index:0,
        len:$('.content-wrapper').find('.item').length - 1,
        scroll:function(){
            var self = this
           mouseObj.mouseWheel(window,'mousewheel',function(e){
                if(self.flag){
                    self.flag = false
                    
                    if(e.wheelDelta == -120){
                        self.index++
                        console.log(self.index)
                        $('.content-wrapper').animate({top:$('.content-wrapper').offset().top- self.liH},1000,
                        
                        function(){
                            $('.order-item').eq(self.index).addClass('select').siblings().removeClass('select')
                            if(self.index == self.len){
                                // continue
                                $('.content-wrapper').css('top',-self.index * self.liH)
                                self.index = 3
                            }
                            self.flag = true
                        })
                    }else{
                        self.index--
                        console.log(self.index)
                        $('.content-wrapper').animate({top:$('.content-wrapper').offset().top+ self.liH},1000,
                        function(){
                            self.flag = true
                        })
                    }
                    
                }
                
           },false)
        },
        bindEvent: function () {
            var self = this
            $('.order-item').mouseenter(function () {
                var index = $(this).index()
                $(this).siblings().removeClass('select')
                $(this).addClass('select')
                if (self.flag) {
                    self.flag = false
                    $('.content-wrapper').animate({ 'top': -index * self.liH }, 1000,
                        function () {
                            self.flag = true
                        })
                }

            })


        }
    }
})($)