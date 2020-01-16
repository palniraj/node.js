const express = require('express')      //header file
const port = 5000;
const app = express()                      //header file
const methodOverride = require('method-override') 

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://palniraj21:mongodb@cluster0-zv6ui.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log('Connection estabalished to db')
}).catch(()=>{
  console.log('connection is not estabalished to db')
})

/*
//get fun
app.get('/', function (req, res) {              // get fun with 2 parameter
  res.send('Hello World from NirajPal')           //gives response with our string hello world
})
*/ 
/*
const index = require('./route/index')
console.log(index)
*/

//bodyparser middleware for post request
app.use(express.urlencoded({extended:false}))
app.use(express.json() )

//overriding the get and post method
app.use(methodOverride('_method'))

//use ejs as template engin
app.set('view engine','ejs')

// it is a middleware, handle '/' request
app.use('/', require('./route/index'))

app.listen(port)                // run with port 5000

