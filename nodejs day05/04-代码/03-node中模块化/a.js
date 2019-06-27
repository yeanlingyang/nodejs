
    console.log('我是模块a');

    let num = 100;
    let name = '赵铁柱';
    

// 其他模块无法直接访问当前模块的数据，除非 当前模块主动暴露数据给外界


// (function (window) {
//     var num = 100;
//     var age = 20;
//     window.num = num;
// })(window);

