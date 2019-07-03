// 基于express 搭建服务器
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

const app = express(); //创建服务器 

// 设置模板引擎 
app.engine('html', require('express-art-template'));
// 设置目录 
app.set('views', 'pages');

//静态资源托管
app.use('/assets', express.static('assets'));

// 给req.body赋值 
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router); //处理路由 ，使用外置路由 

app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));