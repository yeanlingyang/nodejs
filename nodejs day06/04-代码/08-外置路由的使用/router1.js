

module.exports = function (app) {   
    // 路由：一套匹配规则
    app.get('/index', (req, res) => { res.send('首页') });
    app.get('/list', (req, res) => { res.send('列表') });
    app.get('/login', (req, res) => { res.send('登陆') });
    app.get('/cart', (req, res) => { res.send('购物车') });
    app.get('/detail', (req, res) => { res.send('详情') });

}