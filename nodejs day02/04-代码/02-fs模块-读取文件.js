//  fs模块， 这个用于操作文件的
// 除了global全局模块，其他模块都需要先引入，在使用 
// 1-引入fs 模块  require(模块名)  
const fs = require('fs');
 
// let $ = require('jquery');
// $.ajax();

// 2-使用fs模块提供功能，来操作文件：
// fs.readFile(路径，[编码], function (err, data) {
    //  err : 读取失败时 错误信息
    //  data: 读取成功时， 返回读取结果 
// });

// 读文件时， 在没有设置编码的情况下，默认以二进制的形式进行读取，  
// Buffer 对象 就是存储是二进制数据 
// 将Buffer对象转成字符串 只需调用 toString()方法即可 
// fs.readFile('./data.txt', function (err, data) {
//     // 判断是否读取成功
//     if (err) {
//         //读取失败
//         console.log(err);
//         return;
//     }
//     // 读取成功
//     console.log(data.toString());
    
// });


// 设置编码， 直接读取结果就是字符串 
fs.readFile('./data.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log(err);        
    }
    // 读取成功
    console.log(data);    
})



