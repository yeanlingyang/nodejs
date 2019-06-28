// 1-引包
const express = require('express');

// 2-创建服务器
const app = express(); 

// 3-监听请求
app.get('/index', (req, res) => {
    res.send('index');
})
app.get('/list', (req, res) => {
    res.send('list');
})
app.get('/login', (req, res) => {
    res.send('login');
})

//4-启动服务器
app.listen(9999, () => { console.log('http://localhost:9999 服务器已启动') });