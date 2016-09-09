'use strict';

app.service('domainesProvider',function ($http) {

  this.getDomaines = function (typeUser,callback) {
    var url ="http://localhost:8888/domaines?typeUser="+typeUser;
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

});