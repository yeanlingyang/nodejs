// 使用express 提供外置路由 来绑定路由对象，传递给主模块使用
const express = require('express');
const db = require('./db');
const path = require('path');
const moment = require('moment');

const router = express.Router(); //创建一个外置路由对象 


// 绑定路由 
router.get('/index', (req, res) => { //首页 
    // 读取数据库数据，配合模板引擎 渲染，把结果返回给浏览器解析 
    db.myQuery('select * from message', null, data => {
        //排序
        data.sort((a, b) => b.id - a.id);
        // console.log(data);  // data   数组
        res.render('index.html', {list: data}); // 渲染 
    });
})
router.get('/', (req, res) => { //首页 
    res.redirect('/index');
})
router.get('/delete', (req, res) => { //删除
    // 获取id，根据id进行删除
    let id = req.query.id;
    db.myQuery('delete from message where id = ?', id, data => {
        res.redirect('/index'); //去首页
    }); 
})
router.get('/add', (req, res) => { // 添加页面  
    res.sendFile(path.join(__dirname, 'pages', 'add.html'));
})
router.post('/submit', (req, res) => { //提交
    //获取前端提交的数据，添加到数据库，页面重新渲染
    let info = req.body;
    info.created = moment().format('YYYY年M月D日 HH:mm:ss');
    // console.log(info);   
    //添加
    db.myQuery('insert into message set ?', info, data => {
        res.redirect('/index'); //去首页
    });
})

router.get('/login', (req, res) => { // 登陆页面
    //直接读取返回接口
    res.sendFile(path.join(__dirname, 'pages', 'login.html'));
})

router.post('/login', (req, res) => {
    // 1-获取前端传递用户名和密码
    // 2-根据传递用户名和密码 去数据库中找相同数据
    // 3-找到 登陆成功 去首页  ，没找到 登陆失败， 继续去登陆 
    let { username, password } = req.body;
    db.myQuery('select * from user where username = ? and password = ?', [username, password], data => {
        console.log(data);     
        if (data.length > 0) {
            //添加登陆成功标记 
            req.session.isLogin = true;   
            //登陆成功
            res.redirect('/index');                  
            
        } else {
            //登陆失败
            res.redirect('/login');
        }
        console.log(req.session);
    })
})

router.get('/logout', (req, res) => {
    // 删除用户在session中登陆标记 
    req.session.isLogin = null;
    // 跳回到登录页
    res.redirect('/login');
});

// 导出
module.exports = router;