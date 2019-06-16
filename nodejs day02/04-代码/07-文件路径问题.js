// 1- 引入fs模块
const fs = require('fs');
// 2-读取 
// fs.readFile('./data77.txt', 'utf-8', (err, data) => {
//     if (err) {
//         return console.log('读取失败:', err);        
//     }
//     // 读取成功
//     console.log(data);
    
// })

// 在读取文件时，如果使用的是相对路径， 相对路径是相对于 node命令执行的位置， 而不是js文件所在的位置；
// 只要执行命令位置发生改变，就会读取失败
// 解决方案： 不用相对路径，用绝对路径

// 使用绝对路径
// \n
//  fs.readFile('E:\\前端视频\\41期就业班\\02\\04-代码\\data77.txt', 'utf-8', (err, data) => {
//         if (err) {
//             return console.log('读取失败:', err);        
//         }
//         // 读取成功
//         console.log(data);        
//  })
// __filename  E:\前端视频\41期就业班\02\04-代码   data77.txt 
// 使用__dirnam 优化
console.log(__dirname + '\\data77.txt'); // E:\前端视频\41期就业班\02\04-代码\  data77.txt 

 fs.readFile(__dirname + '\\data77.txt', 'utf-8', (err, data) => {
        if (err) {
            return console.log('读取失败:', err);        
        }
        // 读取成功
        console.log(data);        
 })

// console.log('------>',  __dirname);

    

