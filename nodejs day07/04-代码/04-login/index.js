// 基于express 搭建服务器
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express(); //创建服务器 

// 初始化session 
app.use(session({
    secret: 'abc',  //  session生成sessionId 会根据你知道字符串进行加密，在传递给浏览器的cookie
    name: 'itcast',
    resave: false,   
    saveUninitialized: true //  // 在浏览器和服务器连接的第一时间，分配session  给浏览器指定一个cookie
}));

// 设置模板引擎 
app.engine('html', require('express-art-template'));
// 设置目录 
app.set('views', 'pages');

//静态资源托管
app.use('/assets', express.static('assets'));

// 给req.body赋值 
app.use(bodyParser.urlencoded({ extended: false }));

//中间件 能够监听到所有的请求， 检查用户之前是否登陆过（login页除外），判断 用户session中是否有islogin属性；
app.use('/', (req, res, next) => {
    console.log('url: ', req.url);  
    console.log(req.session.isLogin);
    
    if (req.session.isLogin || req.url === '/login') {
        next();
    } else {
        //跳转登录页登陆 
        res.redirect('/login');
     }   
})

app.use(router); //处理路由 ，使用外置路由 

app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));