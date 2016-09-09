app

.service('comptecreerProvider', function($http){ 

  this.add= function(infos, callback){ 

    console.log(infos.log);

	var url="http://localhost:8888/creercomptes";

  var typ="Compte";

	var req ={
        method: 'POST',
        url: url,
        cache :false,
        headers: { 
          'Accept':'Application/json',
          'Cache-Controle':'no-cache'
        }, 
        data: {code:infos.code,nom:infos.nom,tel:infos.tel,type:typ,login:infos.log}
      };

      $http(req)
        .success(function (response) {
          //console.log(response);	
          callback(response);

        })
        .error(function (response) {
          console.log(response);
        })

};

})