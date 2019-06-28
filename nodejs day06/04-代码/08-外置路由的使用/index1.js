const express = require('express');
const router1 = require('./router1');

const app = express();
//处理请求， 根据不同的请求，返回不同响应

//处理请求
router1(app);


//设置端口，启动服务器
app.listen(9999, () => { console.log('http://localhost:9999 服务器已启动') });


