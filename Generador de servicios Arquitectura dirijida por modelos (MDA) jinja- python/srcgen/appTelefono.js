 var express = require("express");
 var mysql = require('mysql');    
 var con = mysql.createConnection({
  host: "localhost",
  user: "camus17",
  password: "",
  database: "c9"

});
 con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DROP TABLE Telefono ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  var sql = "CREATE TABLE Telefono (id INT NOT NULL AUTO_INCREMENT,indicador VARCHAR(255),numero VARCHAR(255), nulo VARCHAR(255),PRIMARY KEY (id))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});



var router=express.Router();
var bodyParser  = require("body-parser");
var aplicacion = express();
var usuarios=require("./routes/serviciosTelefono");
router.get('/', function(request, response) {  
   response.status(200).json({"mensaje":""});
});
aplicacion.use(bodyParser.json()); 
//incluimos el archivo en el que se almacenan las rutas de cada entidad
aplicacion.use(router);  
aplicacion.use(usuarios);
 

aplicacion.listen(8080, function() { 
 console.log("Iniciado en el puerto http://localhost:8080");
});