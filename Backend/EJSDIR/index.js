const express = require('express')
const app = express()
const port = 8080
const path = require('path')
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.use(express.static(path.join(__dirname,'public')))
app.get('/', (req, res) => {
    res.send('Helooo')
})
app.get('/home', (req, res) => {
    res.render('home')
})
app.get('/diceroll', (req, res) => {
    let diceval = Math.floor(Math.random() * 6) + 1
    res.render('diceroll', { diceval })
})
app.get('/about', (req, res) => {
    res.render('about')
})
// app.get('/ig/:username',(req,res)=>{
//     let {username} = req.params;
//     let followers = ['kashish','Avneesh','Instagram','viral']
//     res.render('instagram',{username,followers})
// })
app.get('/ig/:username', (req, res) => {
    let { username } = req.params;
    let instaData = require('./data.json');
    let data = instaData[username];
    // console.log(data)
    if (data)
        res.render('instagram', { data })
    else
        res.send(`<h1>No such Data for @${username}</h1>`)
})

app.listen(port, () => {
    console.log(`App is listening at port ${port}`)
})