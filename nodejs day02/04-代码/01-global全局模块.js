// node中有很多功能， 功能是分模块的，node将相同的功能划分到一个模块；

// 在浏览器中全局对象 是window, 在node中全局对象是global 
// 全局对象（global）属性 在任何地方都可以使用 

// 全局方法和属性 
// console
// setInterval()
// setTimeout()
// clearIneterval();
// claerTimeout();
// __dirname  获取当前文件的绝对路径 
// __filename 获取文件全名（绝对路径 + 文件名)

// let num = 10;

// setInterval(function () {
//     console.log(num++);    
// }, 1000);

// document.querySelector('div');
// 文件的绝对路径 
console.log('-------->', __dirname);  // E:\前端视频\41期就业班\02\04-代码
// 文件绝对路径 + 文件名 = 文件全名
console.log('-------->',__filename);  // E:\前端视频\41期就业班\02\04-代码\01-global全局模块.js








