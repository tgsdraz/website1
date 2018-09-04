var domObj = require('./dom.js')
var $ = require('jquery')
module.exports = (function($){
    return {
        reserve:function(){
            var len = domObj.$pageFourItem.length;
            for(var i = 0; i < len; i++){
                $(domObj.$pageFourItem[i]).hover(function(){
                    $(this).find('.page-item-wrapper').addClass('item-wrapper-trans180')
                },function(){
                    $(this).find('.page-item-wrapper').removeClass('item-wrapper-trans180')
                })
            }


        }
    }
})($)