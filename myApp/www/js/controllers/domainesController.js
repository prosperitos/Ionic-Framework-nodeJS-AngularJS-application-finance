'use strict';
app.controller('domaineslist',function ($scope,$rootScope,domainesProvider) { 

  domainesProvider.getDomaines($rootScope.tiers.Type,function(response){

  	console.log($rootScope.tiers.Type);

     if(response.length==0){ 

       // dire ici kil nexiste aucun domaine pour cet utilisateur

    $ionicPopup.alert({ 

          title: 'Erreur de domaine',

          template: 'pas de domaines pour ce utilisateur'

        }); 


     }else{ 
       
       console.log(response);

       $scope.domaines = response;

     }
  })
});