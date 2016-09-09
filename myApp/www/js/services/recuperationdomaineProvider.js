app

.service('recuperationdomaineProvider', function($http){ 


this.domaine = function(dom, callback){

var url = "http://localhost:8888/recuperernomdomaine"+"?domaine="+dom;

console.log(dom);

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