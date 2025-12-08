const arr = [2, 4, 5, 6, 8, 10]

const squre = arr.map(num =>  num * num )
console.log(squre)
const even = arr.filter(num=> num % 2 == 0)
console.log(even)
const sum = arr.reduce((acc,num)=> acc+num,0)
console.log(sum)