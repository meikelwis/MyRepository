var express = require ('express')
var app = express()
var fs = require('fs')
var ceritaList = require ('./cerita.js')

const PORT = process.env.PORT || 8080
const path = __dirname

function isTxtFile(value){
  return value.substr((value.lastIndexOf('.')+1)) === "txt"
}

//Best Practice kalau mau buat 
//method yang sifat nya private
//
var File = (function(){
  function File(name){
    this.getName = function(){
       return name.replace(/\.[^/.]+$/,"")
    }
  }
  return File
}())


app.get("/",function(req,res,next){
  res.setHeader("Content-Type","text/html") 
  fs.readdir(path,function Callback(err,files){
    var fileList = files.filter(isTxtFile)
    fileList.forEach(function(file,index){
      var vFile = new File(file)
      res.write('<li><a href="/file/'+file+'">'+ vFile.getName()+'</a></li>')
    })
    res.end()
  })
})

app.get("/file/:isiFile",function(req,res,next){
  var isiFile = req.params.isiFile
  fs.readFile(isiFile,"utf8",function(err,data){
    if(err) throw err
    res.write(data)
    res.end()
  })
 })
app.listen(PORT,function(){
  console.log("magic happen at port "+ PORT)
})
