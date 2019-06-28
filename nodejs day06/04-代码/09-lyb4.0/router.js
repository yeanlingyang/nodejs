// 绑定路由
// 使用express 提供外置路由对象绑定路由 

const express = require('express');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const router = express.Router(); //创建一个外置路由对象 

//绑定 
router.get('/index', (req, res) => { //首页
   // 读取数据库数据 和模板引擎渲染，返回给浏览器 
    readData(data => {
        data.list.sort((a, b) => b.id - a.id);
        //配合模板进行渲染
        res.render('index.html', data);
    });
})
router.get('/', (req, res) => { //首页
    res.redirect('/index'); //跳转到index
})
router.get('/delete', (req, res) => { //删除
    // 获取前端id， 根据id删除对应的数据 
    let id = req.query.id;
    // 读数据
    readData(data => {
        let index = data.list.findIndex(v => v.id == id); //找下标
        data.list.splice(index, 1);
        data = JSON.stringify(data, null, 2); // 转json字符串
        writeData(data, () => {
            //跳转到首页
            res.redirect('/');
        })
    });
 
})
router.get('/add', (req, res) => { // 添加页
    // 直接读取返回即可
    res.sendFile(path.join(__dirname, 'pages', 'add.html'));
})
router.post('/submit', (req, res) => { //提交页
    // 获取前端提交的数据，添加到时data.json中 
    let info = req.body;
    //添加id 和created
    info.id = Date.now();
    info.created = moment().format('YYYY年M月D日 HH:mm:ss');
    // console.log(info);
    readData(data => {
        data.list.push(info); // 添加
        data = JSON.stringify(data, null, 2); //转成json
        writeData(data, () => {
            //去首页
            res.redirect('/');
        });
    });
    
})



module.exports = router;

function readData(fn) {
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
        if (err) {
           return console.log(err);           
        }
        data = JSON.parse(data); // 转成对象
        // 后续有fn来处理读取的数据
        fn && fn(data);
   })
}

function writeData(data, fn) {
    fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, 'utf-8', err => {
        if (err) {
            return console.log(err);                
        }
        // 写入完成后，有fn继续处理
        fn && fn();
    })
}