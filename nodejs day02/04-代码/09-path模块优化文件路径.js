// 1-引入模块
const fs = require('fs');
const path = require('path');

// 2-读取文件
fs.readFile(path.join(__dirname, 'data77.txt'), 'utf-8', (err, data) => {
    if (err) {
       return console.log(err);       
    } 
    console.log(data);     
});