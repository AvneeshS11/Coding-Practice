//:) Let & Const...

// let a = 5;
// a = 10; // Reassign Allowed for let..
// console.log(a)  // 10

// const a = 10;
// a = 20; //Reassign Not Allowed for Const and it will TypeError..
// console.log(a);


//:) Arrow Functions (=>)

// const add = (a,b) =>{
//     return a + b;
// }
// console.log(add(4,5))


//:) Template Literals (text ${variable})

// let name = "Avneesh"
// console.log(`My name is ${name}`)


//:) Default Parameters

// const add = (a = 5, b = 4) => { console.log(a + b) }
// add() // 9
// add(9,7) // 16


//:) Spread Operator (...)

// const arr = [1,2,3,4,5]
// const newArr = [...arr,6,7,8,9]
// console.log(newArr) // [1,2,3,4,5,6,7,8,9,]

// let obj = {name : "Avneesh", Company : "XYZ", City : "Kanpur"}
// console.log({...obj , name : "kashish"}) 
// console.log({name : "kashish",...obj}) 


//:) Destructuring

// let arr = [1, 2, 3, 4, 5]
// const [a, b, , ...rest] = arr
// console.log(rest)//4,5

// let obj = { user: "Avneesh", Company: "XYZ", City: "Kanpur" }
// const { user, ...rest } = obj;
// console.log(user);
// console.log(rest);

//:) CallBack

// const greet = (user)=>{
//     console.log("Hello "+user)
// }
// function print(CallBack){
//     CallBack("Avneesh")
// }
// print(greet)

//:) Promises

// let prom1 = new Promise((resolve, reject) => {
//     const num = Math.random()
//     if (num > 0.5) {
//         reject("This promise is rejected because of trust issue")
//     } else {
//         setTimeout(() => {
//             console.log("Yes I am Done")
//             resolve("Avneesh")
//         }, 2000);
//     }
// })

// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err)
// })