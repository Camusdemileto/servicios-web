
var conn=require('./connection');

var mysql = require('mysql'),
connection = mysql.createConnection(
	conn
);
 
var usuarios = {};
 
usuarios.getUsuarios = function(callback)
{
	if (connection) 
	{
		connection.query('SELECT * FROM Telefono', function(error, rows) {
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, rows);
			}
		});
	}
}
 

usuarios.getUsuarioById = function(id,callback)
{
	if (connection) 
	{
		var sql = 'SELECT * FROM Telefono WHERE id = ' + connection.escape(id);
		connection.query(sql, function(error, row) 
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, row);
			}
		});
	}
}


usuarios.insertUsuario = function(usuarioData,callback)
{
	if (connection) 
	{
		connection.query('INSERT INTO Telefono SET ?', usuarioData, function(error, result) 
		{
			if(error)
			{
				
				throw error;
			}
			else
			{
	    	callback(null, result.insertId);
			}
		});
	}
}
 

usuarios.updateUsuario = function(datosUsuario, callback)
{
	
	if(connection)
	{
		var sql = 'UPDATE Telefono SET nombre = ' + connection.escape(datosUsuario.nombre)  +' WHERE id = ' + datosUsuario.id;
		connection.query(sql, function(error, result) 
		{
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null,{"mensaje":"Actualizado"});
			}
		});
	}
}
 

usuarios.deleteUsuario = function(id, callback)
{
	if(connection)
	{
		var sql = 'DELETE FROM Telefono WHERE id = ' + connection.escape(id);
		connection.query(sql, function(error, result) 
			{
				if(error)
					{
						throw error;
					}
				else
					{
						callback(null,{"mensaje":"Borrado"});
					}
			});
	}
			
}

module.exports =usuarios;