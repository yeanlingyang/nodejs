// path.basename(path[, ext]) 返回文件的最后一部分

// path.dirname(path) 返回路径的目录名

// path.extname(path)  获取路径的扩展名

const path = require('path');

let str = "E:\\前端视频\\41期就业班\\02\\04-代码\\data77.txt";

// 获取文件名 
console.log(path.basename(str));

//获取文件路径 
console.log(path.dirname(str));

// 获取拓展名
console.log(path.extname(str));

 

