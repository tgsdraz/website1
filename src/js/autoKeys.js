let domObj = require('./dom.js')
module.exports = (function(){
    return {
        auto:function(){
            let s = '&lt;br/&gt;'
            let str = `学习是一个充实愉悦的过程喜欢尝试，期待新鲜事物前端即兴趣，兴趣即未来行路有良友，便是捷径期待有机会与您共事`
            let i = -1;
            let len = str.length;
            let timer = setInterval(function(){
                domObj.$singleWords.innerHTML += str.substring(i,i+1);
                i++
                if(i == 12 || i == 23 || i== 34 || i== 44){
                    domObj.$singleWords.innerHTML += '<br/>'
                }
                
                if(i == str.length){
                    clearInterval(timer)
                }
                
            },300)
        }
    }
})()