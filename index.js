
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')

mongoose.connect("mongodb+srv://userr1:Qwerty%40123userr1@cluster0.15g6e.mongodb.net/users?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection

db.on('error', (err)=>{
  console.log(err);
})
db.once('open', () => {
  console.log('Database connected');
})


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const port = process.env.PORT||3000

app.listen(port, () => {
  console.log('server is running')
})


app.use('/api/user', userRoute)