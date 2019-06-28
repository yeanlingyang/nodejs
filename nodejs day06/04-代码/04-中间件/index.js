// 中间件  是一个函数， 可以接受req,和res的对象，并且可以向下传递
// 中间件的作用， 主要用于给req,和res 拓展功能的


// 1-引包
const express = require('express');

// 2-创建服务器
const app = express(); 

// 使用中间件 给req, res拓展功能

app.use( function (req, res, next) {
    req.aa = 'aa';
    req.dcg = 'dcg';
    req.body = 'body';
    // res.send('呵呵');
    next();  // 向下传参
} );

// 3-监听请求
app.use((req, res) => {
    console.log(req.url, req.method);
    console.log(req.aa);
    console.log(req.dcg);
    console.log(req.body);
    
    res.send('ok');  
});

//4-启动服务器
app.listen(9999, () => { console.log('http://localhost:9999 服务器已启动') });