var express = require('express');
var router = express.Router();
var usuariosModel = require('../models/servicioDireccion');

router.get('/todos', function(request, response) {  
   usuariosModel.getUsuarios(function(error, data)
    {
          response.status(200).json(data);
    });
});
router.get('/Direccion', function(request, response) {  
  var id = request.query.id;
  console.log(id)
  usuariosModel.getUsuarioById(id,function(error, datos)
      {
       
         response.status(200).json(datos);
      });
    });

router.post('/Direccion', function(request, response) { 
  var datosUsuario = {
calle : request.body.calle,ciudad : request.body.ciudad,pais : request.body.pais,      nulo : ""
    };
    console.log(datosUsuario);
    usuariosModel.insertUsuario(datosUsuario,function(error, datos)
    {  response.status(200).json({datos});
     
    });
});


router.put('/Direccion', function(request, response) {  
    var datosUsuario = {
      id:request.query.id,
      nombre : request.query.nombre
      };

    usuariosModel.updateUsuario(datosUsuario,function(error, datos)
    {
        response.status(200).json(datos);
    });

});

router.delete('/Direccion', function(request, response) {  
	var id = request.query.id;
    usuariosModel.deleteUsuario(id,function(error, datos)
    {
       response.status(200).json(datos);
    });

});

module.exports = router;