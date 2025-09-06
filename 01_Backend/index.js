require ('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send("Hello Vivek How are you...?")
})

app.get('/twitter' , (req,res) => {
    res.send('Hi I am using twitter')
})

app.get('/login' , (req,res) => {
    res.send('<h1>Please Login</h1> </br> <button>Login</button>')
})

app.listen(process.env.PORT , () => {
    console.log(`Example app is listening on port ${port}`)
})