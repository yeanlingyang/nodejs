## cookie-session 登陆状态保存

### http协议是无状态的

> 多次请求之间没有关系cookie

siession

 ## express-session使用



1. 下载  `npm i express-session`
2. 导入  `const session = require("express-session")`
3. 使用session中间件
```js
app.use(session({
     // 给cookie中存储的sessionid加密的， 可以随意指定一个字符串
 	secret: 'itcast',
    // 设置浏览器端cookie中的sessionId设置名字， 默认connect.sid
    name: 'sessionId',
    resave: false,
    // 在浏览器和服务器连接的第一时间，分配session  给浏览器指定一个cookie
    saveUninitialized: true
 }))
```

​      可以通过req.session访问到session

​    4. 登录成功，把登录成功的用户信息存储到 req.session.xxx中

```js
 db.findUser(username, password, result => {
    if (result.length > 0) {
      // 登录成功
      // 登录成功了，把当前用户的信息，保存到req.session中
      req.session.user = req.body
      res.redirect('/')
    } else {
      res.redirect('/login')
    }
  })
```



​    5. 提供一个中间件，这个中间件在路由的前面，判断 req.session.xxx是否有值，有值，放走，没值，去登录，细节： 如果是/login 直接放走

```js
app.use((req, res, next) => {    
    if ( !req.session.user && req.url !== '/login' ) {
        res.redirect('/login');        
    } else {
        next();
    }
});
```



​    6. 退出功能：  把req.session.xxx 清空即可

```js
  // 把session中的用户信息清空
  req.session.user = null
  // 跳到登录页
  res.redirect('/login')
```





