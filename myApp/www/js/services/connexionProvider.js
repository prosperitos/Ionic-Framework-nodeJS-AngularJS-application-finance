app

.service('authentificationProvider', function($http){ 


this.verification = function(tiers, callback){

var url = "http://localhost:8888/connexion"+"?login="+tiers.code+"&"+"password="+tiers.CodeSecurite;

var req = { 

	method:'GET', 

	url:url, 

	cache:false, 

	headers:{ 

	'access-control-allow-origin':' *',	

    'Accept':'Application/json', 

    'Cache-Controle':'no-cache' 
	}
};

$http(req) 
.success(function(response){ 

	callback(response); 

}) 

.error(function(response){ 

	console.log('echouee');
});

};

});

