// 同步： 一次只能做一件事， 上一件没有完成，下一件事处于等待状态 
// 异步：可以同时做多件事件
// 同步代码是顺序执行的，  异步 代码执行顺序和书写顺序无关；

// 事件一
// 事件二
// 事件三

// 1-引入fs 
const fs = require('fs');


console.log('11111111111111111');

// 读取文件(异步)
// fs.readFile('./data.txt', 'utf-8', (err, data) => {
//     console.log(data);    
// });

// 读文件同步 
let str = fs.readFileSync('./data.txt', 'utf-8');
console.log(str);

console.log('22222222222222222');
