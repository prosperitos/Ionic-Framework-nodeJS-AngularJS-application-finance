app

.service('recuperationtypeProvider', function($http){ 


this.type = function(tiers, callback){

var url = "http://localhost:8888/recuperertype"+"?type="+tiers;

console.log(tiers);

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