'use strict';

/**
 * @ngdoc function
 * @name nameApp.controller:AgregarMascotaCtrl
 * @description
 * # AgregarMascotaCtrl
 * Controller of the nameApp
 */
angular.module('nameApp')
  .controller('AgregarMascotaCtrl', function ($scope, $http) {
    $scope.title = 'Mascota';
    $scope.message = 'Agregar Mascota';

      $http.get(api_path + 'nombre?limit=0')
      .then(function(response) {
        $scope.nombre = response.data;
      });
      $http.get(api_path + 'tipoAnimal?limit=0')
      .then(function(response) {
        $scope.tipoAnimal = response.data;
      });
      $http.get(api_path + 'color?limit=0')
      .then(function(response) {
        $scope.color = response.data;
      });
      $http.get(api_path + 'propietario?limit=0')
      .then(function(response) {
        $scope.propietario = response.data;
      });

    $scope.add = function(){
      if($scope.Mascota.nombre == null){
        return;
      }
      if($scope.Mascota.tipoAnimal == null){
        return;
      }
      if($scope.Mascota.color == null){
        return;
      }
      if($scope.Mascota.propietario == null){
        return;
      }
    var data = {
        nombre: $scope.Mascota.nombre,
        tipoAnimal: $scope.Mascota.tipoAnimal,
        color: $scope.Mascota.color,
        propietario: $scope.Mascota.propietario,
    };
    $http.post(api_path + 'Mascota',data);
    window.location.href = '#/Mascota';
  };

  $scope.cancel = function(){
    window.location.href = '#/Mascota';
  };
  });