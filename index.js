var express = require ('express')
var app = express()
var fs = require('fs')

const PORT = process.env.PORT || 8080
const path = __dirname

var ceritaList = require ('./cerita.js')
var namaFile = "cerita.txt"

var File = {
  isTxtFile: function(value){
    return value.substr((value.lastIndexOf('.')+1)) === "txt"
  },
  title: function(value){
    return value.replace(/\.[^/.]+$/,"")
  }
}

//fs.readFile(value,"utf8",function(err,data){
  //if(err) throw err
    //console.log(data)
    //return data
//})

app.set('view engine','pug')
app.get("/",function(req,res,next){
  res.setHeader("Content-Type","text/html")
 
  fs.readdir(path,function Callback(err,files){
    var file = files.filter(File.isTxtFile).map(File.title)
    console.log(file)
  })
  
  res.end()
})
app.listen(PORT,function(){
  console.log("magic happen at port "+ PORT)
})
