console.log('我是模块b');

// 暴露数据 可以 module.exports ，也可也使用 exports
// 但是 node模块在导出数据时，会导出module.exports指向的对象； 推荐使用module.exports 导出数据 

// module.exports.name = '鹏鹏'; 

//可以使用  
// exports.age = 16;


module.exports = {
    name: '狗蛋',
    age: 20
}

exports = {
    name: '翠花',
    age: 27
}
