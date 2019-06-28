// 在express中 提供外置路由模块，路由不一定要绑定给app了， 也可以绑定给外置路由；

const express = require('express');
// 创建一个外置路由
const router = express.Router();

router.get('/index', (req, res) => { res.send('首页') });
router.get('/list', (req, res) => { res.send('列表') });
router.get('/login', (req, res) => { res.send('登陆') });
router.get('/cart', (req, res) => { res.send('购物车') });
router.get('/detail', (req, res) => { res.send('详情') });

module.exports = router;

