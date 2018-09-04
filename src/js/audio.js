var domObj = require('./dom.js')
var $ = require('jquery')
module.exports = (function($){
    return {
        play:function(){
            domObj.$audio[0].play()
        }
    }
})($)