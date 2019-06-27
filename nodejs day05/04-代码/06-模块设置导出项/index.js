// 在node中，一个单独js文件，就是一个模块，每个模块有自己独立的作用域， 其他模块无法访问当前模块数据的；
// 如果模块的数据要给其他模块使用，怎么做？
// 需要把数据从当前模块暴露出去即可；

// require(模块名称)  返回值 就是引入模块的 module.exports属性 
// const a = require('./a');
// // const fs = require('fs');
// // const path = require('path');
// console.log(a);

const b = require('./b');

console.log(b);


