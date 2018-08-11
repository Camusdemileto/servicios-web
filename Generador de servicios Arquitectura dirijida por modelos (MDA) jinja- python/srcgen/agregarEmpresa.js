'use strict';

/**
 * @ngdoc function
 * @name nameApp.controller:AgregarEmpresaCtrl
 * @description
 * # AgregarEmpresaCtrl
 * Controller of the nameApp
 */
angular.module('nameApp')
  .controller('AgregarEmpresaCtrl', function ($scope, $http) {
    $scope.title = 'Empresa';
    $scope.message = 'Agregar Empresa';

      $http.get(api_path + 'direccion?limit=0')
      .then(function(response) {
        $scope.direccion = response.data;
      });
      $http.get(api_path + 'empleado?limit=0')
      .then(function(response) {
        $scope.empleado = response.data;
      });
      $http.get(api_path + 'nit?limit=0')
      .then(function(response) {
        $scope.nit = response.data;
      });
      $http.get(api_path + 'nombre?limit=0')
      .then(function(response) {
        $scope.nombre = response.data;
      });

    $scope.add = function(){
      if($scope.Empresa.direccion == null){
        return;
      }
      if($scope.Empresa.empleado == null){
        return;
      }
      if($scope.Empresa.nit == null){
        return;
      }
      if($scope.Empresa.nombre == null){
        return;
      }
    var data = {
        direccion: $scope.Empresa.direccion,
        empleado: $scope.Empresa.empleado,
        nit: $scope.Empresa.nit,
        nombre: $scope.Empresa.nombre,
    };
    $http.post(api_path + 'Empresa',data);
    window.location.href = '#/Empresa';
  };

  $scope.cancel = function(){
    window.location.href = '#/Empresa';
  };
  });