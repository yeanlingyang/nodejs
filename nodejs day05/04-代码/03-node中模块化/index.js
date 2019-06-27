//  node 模块化概念
// 1- 一个单独js文件，就是一个模块 
// 2- 每个模块有自己独立的作用域， 当前模块中的数据,方法, 其他模块是无法访问的

// 引入a模块 
// require('fs');
require('./a');

console.log(num);
console.log(name);
