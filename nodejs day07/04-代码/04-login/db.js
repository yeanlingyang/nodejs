// 封装一个操作数据库模块
const mysql = require('mysql');

// 连接数据库相关信息
const config = {
    host: '127.0.0.1',
    user:'root',
    password: 'root',
    database: 'zlyb41'
}
// sql: 执行sql语句
// params: 替换数据
// fn: 操作数据库完成后，回调函数
module.exports.myQuery = function (sql, params, fn) {
    // 1-连接数据库 
    const con = mysql.createConnection(config); //创建连接对象
    con.connect(); 
    // 2-操作数据库
    con.query(sql, params, (err, data) => {
        if (err) {
            return console.log(err);            
        }
        //操作成功
        fn && fn(data);
    });
    // 3-断开连接 
    con.end();
}