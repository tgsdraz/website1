var $ = require('jquery');
var drawObj = {
    oCanvas : document.getElementsByTagName('canvas')[0],
    positions:[],
    drawCircle:function(x,y){
        var ctx = this.oCanvas.getContext('2d');
        ctx.strokeStyle = 'limegreen';
        ctx.strokeWidth=2;
        for(var i = 0 ; i < 7; i++){
            ctx.beginPath();
            ctx.arc(x,y,50 + i * 10,2 * Math.PI, false);
            ctx.stroke();
        }
    },
    drawLine:function(bx,by,es,ey){
        var ctx = this.oCanvas.getContext('2d');
        ctx.strokeStyle = 'orange';
        ctx.strokeWidth=2;
        ctx.beginPath();
        ctx.moveTo(bx,by);
        ctx.lineTo(es,ey);
        ctx.stroke()
    },
    drawText:function(str,x,y){
        var ctx = this.oCanvas.getContext('2d');
            ctx.font = "italic 16px 黑体";
			ctx.fillStyle = "Red";
			ctx.fillText(str,x,y,200);
    },
    drawCot:function(){
        var ctx=this.oCanvas.getContext("2d");
        var x=0,y=0;
        for(var j = 0; j < 6; j++){
            var ability = Math.random()*0.2 + 0.8;
            if(j == 0){
                x = 200-100*ability*Math.sin(45*Math.PI/180);
                y = 200-100*ability*Math.cos(45*Math.PI/180);
            }else if(j == 1){
                x = 200-100*ability;
                y = 200;
            }else if(j == 2){
                x = 200-100*ability*Math.sin(45*Math.PI/180);
                y = 200+100*ability*Math.cos(45*Math.PI/180);
            }else if(j == 3){
                x = 200+100*ability*Math.sin(45*Math.PI/180);
                y = 200+100*ability*Math.cos(45*Math.PI/180);
            }else if(j == 4){
                x = 200+100*ability;
                y = 200;
            }else{
                x = 200+100*ability*Math.sin(45*Math.PI/180);
                y = 200-100*ability*Math.cos(45*Math.PI/180);
            }
            this.positions.push({
                x:x,
                y:y
            })
            ctx.fillStyle="#00FFFF";
            ctx.beginPath();
            ctx.arc(x,y,0.5,Math.PI*2,0,true);
            ctx.closePath();
            ctx.fill();

        }
        console.log(this.positions)  
    },
    drawArea:function(){
        var ctx = this.oCanvas.getContext('2d');
            ctx.strokeStyle = 'transparent';
            ctx.strokeWidth=1; 
            ctx.beginPath()
            ctx.moveTo(this.positions[0].x,this.positions[0].y);
        for(var i = 1; i< this.positions.length; i++){
                    ctx.lineTo(this.positions[i].x,this.positions[i].y);
                    ctx.stroke()
                    if(i == 5){
                        ctx.fillStyle = 'rgba(255,0,0,0.4)'
                        ctx.closePath()
                        ctx.fill()
                    }
                
                
                
                
                
        }
    }

}
module.exports = drawObj