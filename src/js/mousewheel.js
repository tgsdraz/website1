module.exports = {
    mouseWheel:function(el,type,fn,capture){
        if(window.addEventListener){
            if(type==='mousewheel'){
                 el.addEventListener(type,fn,capture || false)
            }else{
                el.addEventListener('DOMMouseScroll',fn,capture || false)
            }
        }else if(window.attachEvent){
            if(type==='mousewheel'){
                el.attachEvent('on'+type,fn.call(ele))
            }
        }else{
             el['on'+type]=fn
        }
    }
}