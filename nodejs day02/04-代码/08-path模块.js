// console.log(__dirname + '\\data77.txt');
// E:\前端视频\41期就业班\02\04-代码\data77.txt
// 在不同的操作系统中，路径风格不一样
// 现在 window操作系统 ： 路径用左斜杠表示     E:\前端视频\41期就业班\02\04-代码\data77.txt
// 在其他的操作系统中： 路径右斜杠表示    /e/前端视频/41期就业班/02/04-代码

// 为了解决路径兼容问题， node 提供 path模块 ， 用于解决路径操作； 

// path 模块使用：
// path.join(片段1， 片段2， 片段3....);  拼接路径片段 
// 1-引入path模块
const path = require('path'); 
// 2-使用 

console.log(path.join('/aa/bb', '\\cc\\dd', 'ee', './ff', 'data.txt'));
console.log(path.join('/aa/bb', '\\cc\\dd', 'ee', '../', '../', './ff', 'data.txt'));
console.log(path.join(__dirname, 'data.txt'));



