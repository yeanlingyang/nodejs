const handler = require('./handler');
// 路由模块：一套匹配规则，用于分配任务 
module.exports = function (req, res) {

    if (req.url.startsWith('/index') || req.url === '/') { //首页
        handler.showIndex(req, res);

    }  else if (req.url.startsWith('/assets')) {  //静态资源
        handler.showAssets(req, res);

    } else if (req.url.startsWith('/delete')) { //删除数据 
        handler.delete(req, res);

    } else if (req.url.startsWith('/add')) { //添加页面
        handler.showAdd(req, res);

    } else if ( req.url.startsWith('/submit') && req.method == 'GET') { //保存前端提交的数据 
        handler.subGet(req, res);

    } else if (req.url.startsWith('/submit') && req.method == 'POST') { // post 提交 数据  
        handler.subPost(req, res);

    } else if (req.url.startsWith('/submit') && req.method == 'POST') { // post 提交 数据  
        handler.subPost(req, res);

    }else {
        handler.show404(req, res);
    }    

}

