require('../css/reset.css')
require('../less/entry.less')
require('../css/text.css')
require('../css/word.css')
require('../css/compatible.css')

var jquery = require('jquery')

var mainObj = require('./main.js')
mainObj.renderMain()

var turnObj= require('./tech.js')
turnObj.turnCircle1();
turnObj.turnCircle2();

var audioObj = require('./audio.js')
//个人能力
var drawObj = require('./ability.js');
//绘制同心圆
drawObj.drawCircle(200,200)
// 绘制直线
drawObj.drawLine(50,200,350,200)
drawObj.drawLine(200,50,200,350)
drawObj.drawLine(100,100,300,300)
drawObj.drawLine(100,300,300,100)
//绘制文字
drawObj.drawText('领导能力',50,100)
drawObj.drawText('组织能力',0,200)
drawObj.drawText('学习能力',50,300)
drawObj.drawText('适应能力',300,300)
drawObj.drawText('创新能力',320,200)
drawObj.drawText('沟通能力',300,100)
//绘制圆点
drawObj.drawCot()
//绘制区域
drawObj.drawArea()


//音乐
// audioObj.play()

//项目案例
var projectObj = require('../js/projects.js')
projectObj.reserve();