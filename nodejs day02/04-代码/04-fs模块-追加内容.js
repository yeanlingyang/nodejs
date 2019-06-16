// 追加文件内容
// fs.appendFile(路径， 数据， [编码], err =>{ });

// 使用步骤：
// 1-引入fs
// 2-使用fs.appendFile进行追加 

// 注意： 如果指定文件不存在，会先创建，在追加 

const fs = require('fs');
//  \n 表示换行 
let str = '\n床前明月光， 地上好多鞋';

fs.appendFile('./data22.txt', str, err => {
    if (!err) {
        console.log('追加成功');        
    }
});


// 追加：
// fs.appendFile(路径, 数据, [编码], err => { }) 

