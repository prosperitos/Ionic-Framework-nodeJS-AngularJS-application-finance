'use strict';

app.service('actesProvider',function($http){

  this.getActes= function (codedomaine,callback) {
    var url ="http://localhost:8888/actes?CodeDomaine="+codedomaine;
    var req ={
      method: 'GET',
      url: url,
      cache :false,
      headers: {
        'Accept':'Application/json',
        'Cache-Controle':'no-cache',
      }
    };
    $http(req)
      .success(function(response) {
        callback(response);
      })
      .error(function (response) {
        callback(response);
      })

  };

  this.getSousActes = function (actes,callback) {
    var url ="http://localhost:8888/req1/"+actes;
    var req ={
      method: 'GET',
      url: url,
      cache :false,
      headers: {
        'Accept':'Application/json',
        'Cache-Controle':'no-cache',
      }
    };
    $http(req)
      .success(function(response) {
        callback(response);
      })
      .error(function (response) { 
        console.log(response);
      })
  }; 

  this.getTiersActe = function(type,numerotiers,callback) {
    var url = "http://localhost:8888/tiersActe/" + type + "/" + numerotiers;
    var req = {
      method: 'GET',
      url: url,
      cache: false,
      headers: {
        'Accept': 'Application/json',
        'Cache-Controle': 'no-cache',
      }
    };
    $http(req)
      .success(function (response) { 
        callback(response);
      })
      .error(function (response) {
        console.log(response);
      })
  };


  this.getTiersInfo = function(type, callback) { 
    var url = "http://localhost:8888/infosActe/" + type;
    var req = {
      method: 'GET',
      url: url,
      cache: false,
      headers: {
        'Accept': 'Application/json',
        'Cache-Controle': 'no-cache',
      }
    };
    $http(req)
      .success(function (response) {
        callback(response);
      })
      .error(function (response) {
        console.log(response);
      })
  };


  this.getTiersFinance = function(type, callback) { 
    var url = "http://localhost:8888/ligneActe/" + type;
    var req = {
      method: 'GET',
      url: url,
      cache: false,
      headers: {
        'Accept': 'Application/json',
        'Cache-Controle': 'no-cache',
      }
    };
    $http(req)
      .success(function (response) {
        callback(response);
      })
      .error(function (response) {
        console.log(response);
      })
  };



  this.getTiersObjet = function(type, callback) { 
    var url = "http://localhost:8888/objetActe/" + type;
    var req = {
      method: 'GET',
      url: url,
      cache: false,
      headers: {
        'Accept': 'Application/json',
        'Cache-Controle': 'no-cache',
      }
    };
    $http(req)
      .success(function (response) {
        callback(response);
      })
      .error(function (response) {
        console.log(response);
      })
  };


this.getTiersDocument = function(type, callback) { 
    var url = "http://localhost:8888/documentActe/" + type;
    var req = {
      method: 'GET',
      url: url,
      cache: false,
      headers: {
        'Accept': 'Application/json',
        'Cache-Controle': 'no-cache',
      }
    };
    $http(req)
      .success(function (response) {
        callback(response);
      })
      .error(function (response) {
        console.log(response);
      })
  };

});