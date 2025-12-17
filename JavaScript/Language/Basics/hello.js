// const multiply = (x , y) => {
//     console.log(x * y)
// }
// add(5, 6,function multiply(x,y){console.log(x*y)})

const add = (a, b, callback) => {
    const sum = a + b;
    console.log(sum);
    callback(sum)
}
const subtract = (num,callback)=>{
    const sub = num - 1;
    console.log("Subtracted by 1 : ", sub);
    callback(sub);
}
const Divide = (num,callback)=>{
    const div = num / 2;
    console.log("Divided By 2 : ",div)
    callback(div)
}

add(5,6,function(result){
    subtract(result,function(result1){
        Divide(result,function(result2){
            console.log("I'm Done")
        })
    })
})