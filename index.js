const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
var cerita = require('./cerita.js')()
app.set('view engine', 'pug')

app.get('*', function (req, res, next) {
    next()
})

app.get('/', function (req, res, next) {
    res.render('index', { cerita })
})
app.get("/cerita/:nomor", function (req, res, next) {
    var nomorCerita = cerita[req.params.nomor]
    res.render('isi-cerita', { nomorCerita })
})
app.listen(PORT, function () {
    console.log('magic happen at port ' + PORT)
})
