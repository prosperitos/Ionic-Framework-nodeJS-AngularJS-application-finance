

app

.service('inscriptionProvider', function($http){ 

this.add= function(tiers, callback){ 

	var url="http://localhost:8888/inscriptionplateforme";

	var req ={
        method: 'POST',
        url: url,
        cache :false,
        headers: { 
          'Accept':'Application/json',
          'Cache-Controle':'no-cache'
        }, 
        data: {login:tiers.code,motsdepasse:tiers.CodeSecurite,tel:tiers.tel,type:tiers.type}
      };

      $http(req)
        .success(function (response) {
          console.log(response);	
          callback(response);

        })
        .error(function (response) {
          console.log(response);
        })

};

})

