// var $ = require('jquery');
// module.exports = (function ($) {
//     return {
//         flag: true,
//         index: 0,
//         liH: $('.content-wrapper').find('.item')[0].offsetHeight,
//         bindEvent: function () {
//             var self = this

//             $('.order-item').mouseenter(function () {
//                 var index = $(this).index()
//                 $(this).siblings().removeClass('select')
//                 $(this).addClass('select')
//                 if (self.flag) {
//                     self.flag = false
//                     $('.content-wrapper').animate({ 'top': -index * self.liH }, 1000,
//                         function () {
//                             self.flag = true
//                         })
//                 }

//             })


//         }
//     }
// })($)