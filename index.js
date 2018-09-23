var express = require('express');
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

var request = require("request")
var parseString = require('xml2js').parseString;


 request('https://s153-fr.ogame.gameforge.com/api/playerData.xml?id=100095', function (error, response, body) {
  //  console.log(error);  
  //  console.log(response)  
  //  console.log(response.statusCode)
  //  console.log(body);

  parseString(body, function (err, result) {
   console.log("player name: ",result["playerData"]["$"])
    console.log("positions: ",result["playerData"]["positions"][0]["position"])
     console.log("planets: ",result["playerData"]["planets"][0]["planet"])
      console.log("alliance: ",result["playerData"]["alliance"])
   
    //  let parsedData = JSON.parse(body)rr
    //  console.log(parsedData)
      });
    });		






app.use(express.static("public"))


app.get("/",function(req,res){
 
});










app.post("/addMember",function(req,res){
  console.log(req.body.userName)
  res.redirect("/")
});









app.listen(3000,function(){
           console.log("server has started")
           })
