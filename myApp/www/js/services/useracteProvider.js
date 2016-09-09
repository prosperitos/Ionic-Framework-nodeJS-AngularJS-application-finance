app

.service('recupereracteuserProvider', function($http){ 


this.recupereracte= function(type, app, callback){


console.log(app);	

var url = "http://localhost:8888/recupereractuser"+"?codeuser="+type+"&"+"nomacte="+app;


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