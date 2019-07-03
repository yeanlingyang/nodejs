// 1-引包
const express = require('express');
const bodyParser = require('body-parser');

// 2-创建服务器
const app = express(); 

// 给req.body进行赋值的
// 使用中间件 给req.body赋值
// extended: false   使用querySting 模块 解析查询字符串 
// extended: true   使用第三方qs 模块 解析查询字符串 ，需要先下载
app.use( bodyParser.urlencoded( {extended: false} ) ); 

// 3-监听请求  匹配所有的请求
app.use((req, res) => {
    console.log(req.body);     
    res.send('ok');    
})

//4-启动服务器
app.listen(9999, () => { console.log('http://localhost:9999 服务器已启动') });