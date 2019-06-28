const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

const app = express(); //创建服务器 

// 设置需要使用模板 
app.engine('html', require('express-art-template'));
// 设置模板目录
app.set('views', 'pages');

// 托管静态资源
app.use('/assets', express.static('assets'));

// 给req.body赋值 
app.use(bodyParser.urlencoded());

//处理路由
app.use(router); 

// 启动服务器
app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));
