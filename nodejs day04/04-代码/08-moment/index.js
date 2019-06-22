// 1-下载 npm i moment  
// 2-在引入
 // moment(时间).format(格式);

//  格式： YYYY 年  ，MM 月 ， DD 日 ， HH 时 ， mm 分 ， ss 秒  

const moment = require('moment');

let date = new Date();

console.log(moment(date).format('YYYY-MM-DD HH:mm:ss'));
console.log(moment(date).format('YYYY年MM月DD日 HH时mm分ss秒'));
// moment如果不传递日期，默认取系统的当前时间 
console.log(moment().format('YYYY年MM月DD日 HH时mm分ss秒')); 
