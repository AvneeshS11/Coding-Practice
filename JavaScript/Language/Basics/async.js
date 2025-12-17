function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Weather Data")
            resolve(200)
        }, 2000);
    })
}
// api().then((res)=>{
//     console.log(res)
// })
async function hello(){
    await api()
    console.log("Hey I'm first")
}