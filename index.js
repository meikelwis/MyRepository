const express = require ('express')
const app = express()
const fs = require('fs')
const PORT = process.env.PORT || 8080

var ceritaPath = __dirname + "/cerita/"

function isTxtFile(value){
  var re = /(?:\.([^.]+))?$/
  return re.exec(value)[1] === 'txt'
}
function getTitle(value){
  return value.replace(/\.[^/.]+$/,'')
}
app.get('/',function(req,res,next){
  res.setHeader('Content-Type','text/html')
  res.write('<h3>Ini adalah halaman utama</h3>') 
  fs.readdir(ceritaPath,function Callback(err,files){
    var fileList = files.filter(isTxtFile)
    fileList.forEach(function(file,index){
      res.write('<li><a href="/file/'+file+'">'+ getTitle(file)+'</a></li>')
    })
    res.end()
  })
})

app.set('view engine','pug')

app.get("/file/:namaFile",function(req,res,next){
  var file = req.params.namaFile
  var namaFilePath = __dirname + '/cerita/' + file
  fs.readFile(namaFilePath,'utf8',function(err,data){
    var title = getTitle(file)
    if(err) throw err
    res.render('index',{title,data})
    res.end()
  })
 })
app.listen(PORT,function(){
  console.log('magic happen at port '+ PORT)
})
