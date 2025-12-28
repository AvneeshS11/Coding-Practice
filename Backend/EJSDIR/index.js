const express = require('express')
const app = express()
const port = 8080

app.set("view engine", "ejs")

app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(port, () => {
    console.log(`App is listening at port ${port}`)
})