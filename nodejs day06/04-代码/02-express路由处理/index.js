// 1-引包
const express = require('express');

// 2-创建服务器
const app = express(); 

// 3-监听请求
// 1- app.method(url, (req, res) =>{ })
// app.get(url, (req, res) =>{ });
// app.post(url, (req, res) =>{ });
// 精确匹配 指定请求方式请求

// 2- app.use(url, (req, res)=>{})
// 模糊匹配：以任意请求方式， 匹配以指定url开头的请求 
// 注意点：
// 真实收入的地址：/index/aa/bb/cc.html
// 大印req.url  :       /aa/bb/cc.html


// app.get('/index', (req, res) => {
//     res.send('index - get');
// })

// app.post('/index', (req, res) => {
//     res.send('index-post');
// })
// /index/aa/bb/cc
// /index/abc.html
// /index111
app.use('/index', (req, res) => {
    console.log(req.url, req.method);
    res.send('use-index');    
})
// / 表示匹配所有的请求， 所有的请求都是以/开头的
// app.use('/', (req, res) => {
//     console.log(req.url, req.method);    
//     res.send('/---index');
// });
// 简写 匹配所有的请求：
// app.use((req, res) => {
//     console.log(req.url, req.method);    
//     res.send('/---index');
// });

//4-启动服务器
app.listen(9999, () => { console.log('http://localhost:9999 服务器已启动') });

// 小结：
// app.get();
// app.post();
// 精确匹配 匹配特点请求方式， 匹配特点url地址

// app.use(url, (req, res)=>{})
// 模糊匹配：以任意的请求方式， 匹配以url开的请求

// 匹配所有的请求
// app.use('/', (req, re)=>{})
// app.use( (req, res)=>{})