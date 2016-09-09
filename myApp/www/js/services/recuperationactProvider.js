app

.service('recuperationacteProvider', function($http){ 


this.acte = function(at, callback){

var url = "http://localhost:8888/recuperationlisteacte"+"?acte="+at;

console.log(at);

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