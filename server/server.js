//constants global
require('./constants')

//const
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/router')

//app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(
    bodyParser.urlencoded({
      extended: true
    })
)

// Set router
app.use(router)


// Run server
app.listen("3000", "localhost", (err) => {
    console.log('server up')

})
