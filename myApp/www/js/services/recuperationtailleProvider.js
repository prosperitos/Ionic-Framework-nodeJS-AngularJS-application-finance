app

.service('recuperationProvider', function($http){ 


this.taille = function(callback){

var url = "http://localhost:8888/recuperationlistecompte" ;

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