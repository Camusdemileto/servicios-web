'use strict';

/**
 * @ngdoc function
 * @name nameApp.controller:AgregarVehiculoCtrl
 * @description
 * # AgregarVehiculoCtrl
 * Controller of the nameApp
 */
angular.module('nameApp')
  .controller('AgregarVehiculoCtrl', function ($scope, $http) {
    $scope.title = 'Vehiculo';
    $scope.message = 'Agregar Vehiculo';

      $http.get(api_path + 'marca?limit=0')
      .then(function(response) {
        $scope.marca = response.data;
      });
      $http.get(api_path + 'modelo?limit=0')
      .then(function(response) {
        $scope.modelo = response.data;
      });
      $http.get(api_path + 'tipo?limit=0')
      .then(function(response) {
        $scope.tipo = response.data;
      });
      $http.get(api_path + 'placa?limit=0')
      .then(function(response) {
        $scope.placa = response.data;
      });

    $scope.add = function(){
      if($scope.Vehiculo.marca == null){
        return;
      }
      if($scope.Vehiculo.modelo == null){
        return;
      }
      if($scope.Vehiculo.tipo == null){
        return;
      }
      if($scope.Vehiculo.placa == null){
        return;
      }
    var data = {
        marca: $scope.Vehiculo.marca,
        modelo: $scope.Vehiculo.modelo,
        tipo: $scope.Vehiculo.tipo,
        placa: $scope.Vehiculo.placa,
    };
    $http.post(api_path + 'Vehiculo',data);
    window.location.href = '#/Vehiculo';
  };

  $scope.cancel = function(){
    window.location.href = '#/Vehiculo';
  };
  });