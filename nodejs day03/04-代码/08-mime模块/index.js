// 使用mime模块 设置mime类型
// mime模块 是一个第三方模块， 不是node核心模块
// 核心模块（官网文档中可以查到） 可以直接引入使用
// 第三方模块， 需要先下载， 在引入使用 
// 1-下载   npm i mime 
// 2- 引入   
const mime = require('mime'); 
// 3-使用mime模块提供的功能  
// mime.getType(文件名);  根据文件名返回mime类型 
// mime.getExtension(MIME类型);  根据mime类型返回拓展名
console.log(mime.getType('/aa/bb/index.html'));
console.log(mime.getType('aa.jpg'));
console.log(mime.getType('aa.mp4'));
console.log(mime.getType('aa.css'));
console.log(mime.getType('aa.js'));
console.log(mime.getType('aa.png'));
console.log(mime.getType('aa.mp3'));

// mime.getType(req.url)

// text/html
// image/jpeg
// video/mp4
// text/css
// application/javascript
// image/png
// audio/mpeg

console.log(mime.getExtension('application/javascript'));
console.log(mime.getExtension('audio/mpeg'));

// mime模块
// 1- 下载 npm i mime 
// 2- 引入使用
//  mime.getType(文件名) --> mime类型
//  mime.getExtension(mime类型) ---> 拓展名

