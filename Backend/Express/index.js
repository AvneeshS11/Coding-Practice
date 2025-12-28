const express = require('express')
const app = express()
const port = 3000

// app.use((req,res)=>{
//     res.send('Hello world');
// })

// app.get('/frute/:name', (req, res) => {
//     let { name } = req.params;
//     res.send(`<h1> My name is ${name}</h1>`)
// })
app.get('/search',(req,res)=>{ //http://localhost:3000/search?q=avneesh
    let {q} = req.query
    res.send(`<h1> My name is ${q}</h1>`)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})