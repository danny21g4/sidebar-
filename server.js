/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
var cookieParser = require('cookie-parser')
const session = require('express-session');
const loginData = require('./routers/loginRouters');
// const sql   = require('sql  ');
const mongoose = require('mongoose');
const mongoDBSession = require('connect-mongodb-session');
require('dotenv').config()
const mongoURI = 'mongodb://localhost:27017/sessions'

mongoose.connect(mongoURI,{
    useNewUrlParser :true,
    useCreateIndex:true,
    useUnifiedTopology : true
})
.then((res) => {
    console.log("connected");
});

const store = new mongoDBSession({
    uri :mongoURI,
    collection :'mySessions'
});

const app = express()

app.use(cors())
const PORT = 5000

app.use(session({
    secret: "some secret",
    cookie: { maxAge: 30000 },
    resave:false , 
    saveUninitialized: false,
    store:store
})
);

app.get('/', function (req, res) {
    // console.log(req.session);
    res.send('Hello World')
})


// app.post("/login", loginData);


var server = app.listen(PORT, function () {
    console.log("Server is running on http://localhost:5000");
  });
  
