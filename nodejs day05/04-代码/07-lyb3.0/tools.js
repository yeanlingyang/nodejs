// 存放各种公共的工具
const fs = require('fs');
const path = require('path');

module.exports = {
    // 由于 读写data.json代码多次使用，遂封装 
    // 封装目的： 提高代码复用性 
    // 如何封装： 提取公共代码， 变化部分 做成参数 

    // readData(function (data) { });

    // 读取data.json方法 
    readData(fn) {
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
            if (err) { return console.log(err); }
            //读取成功
            data = JSON.parse(data); //把json字符串转成对象
            // 读取数据后，如何处理数据是不确定
            fn && fn(data);
            // if (fn) { fn(data) };
        })
    },

    writeData(data, fn) {
        fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, 'utf-8', err => {
            if (err) { return console.log(err); }
            //数据写入完成后，如何处理 不确定？
            fn && fn();
        })
    }

}