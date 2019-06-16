// fs 写入文件
// fs.writeFile(路径, 数据， [编码], (err) => { });

// 使用步骤：
// 1-引入fs模块
// 2-使用fs.writeFile(); 

// 注意点：
// 1-写入文件，会覆盖原有文件内容 
// 2-如果指定文件不存在，会先创建文件，再进行写入


// 1-引入fs模块
const fs = require('fs'); 

// 2- 写入
let str = '如果遇到你要用光我这辈子所有运气， 那就请你离我远一点！';

fs.writeFile('./data11.txt', str, 'utf-8', err => {
    //判断是否写入成功
    if (!err) {
        console.log('写入成功');        
    }
})

// fs.writeFile(路径， 数据, [编码], (err) => { })

