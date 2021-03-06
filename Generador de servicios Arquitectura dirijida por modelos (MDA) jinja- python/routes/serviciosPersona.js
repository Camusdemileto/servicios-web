var express = require('express');
var router = express.Router();
var usuariosModel = require('../models/servicioPersona');

router.get('/todos', function(request, response) {  
   usuariosModel.getUsuarios(function(error, data)
    {
          response.status(200).json(data);
    });
});
router.get('/Persona', function(request, response) {  
  var id = request.query.id;
  console.log(id)
  usuariosModel.getUsuarioById(id,function(error, datos)
      {
       
         response.status(200).json(datos);
      });
    });

router.post('/Persona', function(request, response) { 
  var datosUsuario = {
nombre : request.body.nombre,apellido : request.body.apellido,direccion : request.body.direccion,edad : request.body.edad,telefono : request.body.telefono,correo : request.body.correo,      nulo : ""
    };
    console.log(datosUsuario);
    usuariosModel.insertUsuario(datosUsuario,function(error, datos)
    {  response.status(200).json({datos});
     
    });
});


router.put('/Persona', function(request, response) {  
    var datosUsuario = {
      id:request.query.id,
      nombre : request.query.nombre
      };

    usuariosModel.updateUsuario(datosUsuario,function(error, datos)
    {
        response.status(200).json(datos);
    });

});

router.delete('/Persona', function(request, response) {  
	var id = request.query.id;
    usuariosModel.deleteUsuario(id,function(error, datos)
    {
       response.status(200).json(datos);
    });

});

module.exports = router;