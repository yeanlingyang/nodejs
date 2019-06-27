// 1- 引入
const express = require('express'); 

// express 用于做服务端开发 jquery 

// 创建服务器
// const server = http.createServer(); 
const app = express();   // 创建服务器

//监听请求  
// 根据不同请求 返回对应页面 
// 处理路由
// server.on('request', (req, res) => {
//     if (req.url.startsWith('/index') && req.method == 'GET') {
//         //首页
//     } else if (req.url.startsWith('/list') && req.method == 'GET') {
//         // 列表页    
//     } else if (req.url.startsWith('/login') && req.method == 'GET') {
//         // 登陆页
//     }
// })

app.get('/index.html', (req, res) => {
    // res.setHeader('content-type', 'text/html;charset=utf-8');
    // res.end('首页');
    res.send('首页');
})
app.get('/list.html', (req, res) => {
    res.send('列表页');
})

app.get('/login.html', (req, res) => {
    res.send('登陆页');
})

// app.post(地址， function() {})

// 启动服务器 
app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));

// 小结：
// 安装： npm i express 
// 创建服务器： const app = express(); 
// 监听请求 ： app.get('/index.html', (req, res) =>{ });
// 启动服务器：app.listen(9999, () => {})