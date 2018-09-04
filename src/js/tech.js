var $ = require('jquery');
var domObj = require('./dom.js')
module.exports = {
    turnCircle1:function(){
        var len = domObj.$outerCircleItem.length;
        var deg = 360 / len;
        var colors = [
                        'rgba(121,100,102,0.8)',
                        'rgba(49,65,82,0.8)',
                        'rgba(76,157,160,0.8)',
                        'rgba(66,66,66,0.8)',
                        'rgba(193,131,106,0.8)',
                        'rgba(117,148,179,0.8)',
                        'rgba(71,83,94,0.8)',
                        'rgba(147,147,189,0.8)',
                    ]
        for(var i = 0; i < len; i++){
            $(domObj.$outerCircleItem[i]).css({
                'background':colors[i],
                'transform':'rotateZ('+ i * deg +'deg) translateX(-150px)' 
            }).find('span').css({
                'transform':'rotateZ('+ (-i * deg) +'deg)'
            })
        }

    },
    turnCircle2:function(){
        var len = domObj.$innerCircleItem.length;
        var deg = 360 / len;
        var colors = [
                        'rgba(179,164,140,0.8)',
                        'rgba(171,209,220,0.8)',
                        'rgba(238,215,163,0.8)',
                        'rgba(207,184,178,0.8)'
                    ]
        for(var i = 0; i < len; i++){
            $(domObj.$innerCircleItem[i]).css({
                'background':colors[i],
                'transform':'rotateZ('+ i * deg +'deg) translateX(-100px)' 
            }).find('span').css({
                'transform':'rotateZ('+ (-i * deg) +'deg)'
            })
        }

    }
}