var express = require('express');
var router = express.Router();
var usuariosModel = require('../models/servicioTelefono');

router.get('/todos', function(request, response) {  
   usuariosModel.getUsuarios(function(error, data)
    {
          response.status(200).json(data);
    });
});
router.get('/Telefono', function(request, response) {  
  var id = request.query.id;
  console.log(id)
  usuariosModel.getUsuarioById(id,function(error, datos)
      {
       
         response.status(200).json(datos);
      });
    });

router.post('/Telefono', function(request, response) { 
  var datosUsuario = {
indicador : request.body.indicador,numero : request.body.numero,      nulo : ""
    };
    console.log(datosUsuario);
    usuariosModel.insertUsuario(datosUsuario,function(error, datos)
    {  response.status(200).json({datos});
     
    });
});


router.put('/Telefono', function(request, response) {  
    var datosUsuario = {
      id:request.query.id,
      nombre : request.query.nombre
      };

    usuariosModel.updateUsuario(datosUsuario,function(error, datos)
    {
        response.status(200).json(datos);
    });

});

router.delete('/Telefono', function(request, response) {  
	var id = request.query.id;
    usuariosModel.deleteUsuario(id,function(error, datos)
    {
       response.status(200).json(datos);
    });

});

module.exports = router;