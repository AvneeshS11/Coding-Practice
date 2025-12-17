// let student = {
//     name : "Avneesh",
//     section : "B",
//     Expert : "C++",
//     Learnig : "Web Development"
// }

// for(let key in student){
//     console.log(key,student[key])
// }


//Array of object...

let person = [
    {name : "Avneesh", age : 20},
    {name : "Kashish", age : 20},
    {name : "Rahul", age : 30},
    {name : "Kunal", age : 40},
    {name : "Aditya", age : 25},
    {name : "Arpit", age : 23}
]
// person.push({name : "KL Rahul",age : 34})
// person.pop()
person.forEach(p=>{
    console.log(`the name of person ${p.name} and age is ${p.age}`);
})