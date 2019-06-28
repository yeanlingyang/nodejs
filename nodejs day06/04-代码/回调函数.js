// function fn1() {
    
// }

// function fn2(a) {
//   a();
// }

// fn2(fn1);

//回调函数 
// 定义test函数 
function test(fn) {
    var num = 100
    fn(num);  // 在函数内部 可以给回调函数进行传递
}
// 调用test 
test( function (a) {  // 参数 来接受传递的参数；
    console.log(a*2);    
})