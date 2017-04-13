var express = require ('express')
var app = express()

var ceritaList = [
  {
    "judul" : "Ini judul satu",
    "isi"   : "Ini Isi satu"
  },
  {
    "judul" : "Ini judul kedua",
    "isi"   : "Ini Isi kedua"
  },
  {
    "judul" : "Ini judul ketiga",
    "isi"   : "Ini Isi ketiga"
  }
]

app.get("/",function(request,response,next){
  response.setHeader("Content-Type","text/html")
  response.write('<h3>Halaman Utama</h3>')
  response.write('<ul>')
  ceritaList.forEach(function(cerita, index){
    response.write('<li><a href = " /cerita/'+index+'">'+cerita.judul+'</a></li>')
  })
  response.write('</ul>')
  response.end()
})

//app.get("/cerita/:nomor",function(req,res){
//  var cerita=ceritaList[req.params.nomor]
//  res.send('<h3>'+cerita.judul+'</h3')
//  res.send('<p>'+cerita.isi+'</p>')
//  res.end()
//})
app.listen(8080,function(){
  console.log("magic happen at port 8080")
})
