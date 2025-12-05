// const add = (a, b) => {
//     return new Promise((resolve) => {
//         const sum = a + b;
//         console.log(sum);
//         resolve(sum)
//     })
// }
// const subtract = (num) => {
//     return new Promise((resolve) => {
//         const sub = num - 1;
//         console.log("Subtracted by 1 : ", sub);
//         resolve(sub);
//     })
// }
// const Divide = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num === 0) {
//             reject("Zero Division Error")
//         }
//         const div = num / 2;
//         console.log("Divided By 2 : ", div)
//         resolve(div)
//     })
// }
// add(2, -1)
//     .then(result => subtract(result))
//     .then(result1 => Divide(result1))
//     .then(result2 => {
//         console.log("I'm Done");
//     }).catch(err => {
//         console.log(err);
//     })


// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 3000);
// });
// function handleFulfilledA(value) {
//   console.log("A got:", value);
//   return value + "-A";            // return a value for the next .then
// }
// function handleFulfilledB(value) {
//   console.log("B got:", value);
//   return value + "-B";
// }
// function handleFulfilledC(value) {
//   console.log("C got:", value);
//   return value + "-C";
// }
// function handleRejected(err) {
//   console.error("Error:", err);
// }
// myPromise
//   .then(handleFulfilledA)
//   .then(handleFulfilledB)
//   .then(handleFulfilledC)
//   .catch(error => console.log("Error:", error));
