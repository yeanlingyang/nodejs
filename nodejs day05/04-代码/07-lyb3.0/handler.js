// 提供各种处理请求细节
const fs = require('fs');
const path = require('path');
const template = require('art-template');
const mime = require('mime');
const url = require('url');
const moment = require('moment');
const queryString = require('querystring');
const tools = require('./tools');

module.exports = {
    showIndex(req, res) { //显示首页
        //动态渲染首页
        //   1-1 读取data.json 中数据， 转成js对象 
        //   1-2 把读取的数据和模板进行绑定，生成结构
        //   1-3 把生成的结构返回给浏览器解析     
        tools.readData(function (data) {
            // 排序
            data.list.sort((a, b) => b.id - a.id);
            // 把数据和模板进行绑定渲染
            let str = template(path.join(__dirname, 'pages', 'index.html'), data);
            res.end(str);
        });
    },
    showAdd(req, res) { // 返回add.html页
        // 读取add.html页面内容，返回给浏览器进行解析
        fs.readFile(path.join(__dirname, 'pages', 'add.html'), (err, data) => {
            if (err) { return console.log(err); } 
            // 返回读取的页面
            res.end(data);
        })
    },
    showAssets(req, res) { //静态资源
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) { return console.log(err); }
            // 告诉浏览器 返回资源的类型 
            res.setHeader('content-type', mime.getType(req.url));
            //返回读取的静态资源
            res.end(data);
        })
    }, 
    delete(req, res) { //删除
        // 2-1 前端点击删除按钮，请求后台/delete地址, 并且传递id到后台 
        // 2-2 后台获取前端传递id， 根据id删除对应的数据
        // 2-3 页面重新渲染，看到删除效果       
        let id = url.parse(req.url, true).query.id; //获取id 
        // tools.readData(function (data) {

        // })
        tools.readData(data => {
            //根据id找下标 
            let index = data.list.findIndex(v => v.id == id);
            data.list.splice(index, 1); //删除
            data = JSON.stringify(data, null, 2); 
            tools.writeData(data, () => {
                //跳转到首页
                res.statusCode = 302;
                res.setHeader('location', '/index');
                res.end();
            })
        })
    },
    subGet(req, res) { //get 提交
        // 3-1 前端点击提交按钮，提交表单数据到后台
        // 3-2 后台要获取表单的数据， 把表单的数据添加到data.json中
        // 3-3 跳转到首页，看到添加的效果  
     
        let info = url.parse(req.url, true).query;
        //设置id 和 创建时间 
        info.id = Date.now();
        info.created = moment().format('YYYY年M月D日 HH:mm:ss');
        tools.readData(data => {
            data.list.push(info); 
            data = JSON.stringify(data, null, 2);
            tools.writeData(data, () => {
                //跳转到首页
                res.statusCode = 302;
                res.setHeader('location', '/index');
                res.end();
            })
        })
    },
    subPost(req, res) { // post提交
        // res.end('submit post');
        // 后台要获取表单的数据， 把表单的数据添加到data.json中
        // 跳转到首页，看到添加的效果   
        // get 会在url拼数据， 数据量小
        // post 用请求体传数据，数据量没有限制 
        
        let str = '';
        req.on('data', chunk => {
            str += chunk;
        })

        req.on('end', () => {
            let info = queryString.parse(str); 
            info.id = Date.now();
            info.created = moment().format('YYYY年M月D日 HH:mm:ss');
            tools.readData(data => {
                data.list.push(info); 
                data = JSON.stringify(data, null, 2);
                tools.writeData(data, () => {
                    //跳转到首页
                    res.statusCode = 302;
                    res.setHeader('location', '/index');
                    res.end();
                })
            })
        })

    },
    show404(req, res) { // 404 
        res.end('404');
    }
}



