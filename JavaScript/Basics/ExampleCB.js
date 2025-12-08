function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data ", dataId)
            resolve("Succes")
        }, 2000);
    })
}
// async function getAllData(){
//     console.log("Data 1 Loading....")
//     await getData(1);
//     console.log("Data 2 Loading....")
//     await getData(2);
//     console.log("Data 3 Loading....")
//     await getData(3);  
//     console.log("Data 4  Loading....")
//     await getData(4);
// }
// getAllData();
//CallBack Hell
// console.log("Data 1 Loading....")
// getData(1,()=>{
//     console.log("Data 2 Loading....")
//     getData(2,()=>{
//         console.log("Data 3 Loading....")
//         getData(3,()=>{
//             console.log("Data 4 Loading....")
//             getData(4)
//         })
//     })
// })

// Chain Promise
// console.log("Data 1 Loading....")
// getData(1)
// .then(() => {
//     console.log("Data 2 Loading....")
//     return getData(2)
// })
// .then(() => {
//     console.log("Data 3 Loading....")
//     return getData(3)
// })

// Nested promise
// console.log("Data 1 Loading....")
// getData(1).then(() => {
//     console.log("Data 2 Loading....")
//     getData(2).then(() => {
//         console.log("Data 3 Loading....")
//         getData(3).then(() => {
//             console.log("Data 4 Loading....")
//             getData(4)
//         })
//     })
// })