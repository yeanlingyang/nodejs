// 1- 引入fs模块
const fs = require('fs');

// 重命名
// fs.rename(旧文件名， 新文件名， err => {})

// fs.rename('./data11.txt', './data77.txt', err => {
//     if (!err) {
//         console.log('重命名成功');        
//     }
// })



// 删除文件
// fs.unlink(文件路径， err => {})
fs.unlink('./data22.txt', err => {
    if (!err) {
        console.log('删除成功');        
    }
})

// fs.rename(oldname, newName, err=> {})
// fs.unlink(path, err => {})