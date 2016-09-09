'use strict'; 

app

.controller('acteslistes',function($scope,$rootScope,$stateParams,actesProvider){ 

  var req = $stateParams.domaine;

  $rootScope.numdomaine=req;

  actesProvider.getActes(req,function (response) { 

    if(response.length==0){
      // so handle one error
    }else{ 

      $scope.actes = response; 

      }
     })

  })

.controller('actesous',function($scope,$rootScope,$stateParams,actesProvider){ 


  $scope.sousacte=$rootScope.sousacte;

  console.log($scope.sousacte);


  })

  .controller('acteView',function ($scope,$rootScope,$stateParams,actesProvider, $ionicPopup, $location) {

     var  req = $stateParams.nom;

     var typeobjet="";

     var sousactes=[];

    // Liste des sous actes

 
       actesProvider.getSousActes(req,function (actes) { 

    	 console.log(actes);

       if (!actes.stat && actes.length !=0){ 

        //$scope.actes = actes;

        $rootScope.sousacte=actes;

        console.log($scope.sousacte);

        $location.path("/sousactes");

        } else { 

          if (!actes.stat && actes.length ==0){

           $ionicPopup.alert({ 

          title: 'Erreur',

          template: 'information vide dans ce acte'

          }); 


           }

        else {

        console.log(actes);

        typeobjet=actes.stat; 

        console.log(typeobjet);

        console.log(typeobjet.length);

        console.log(req);

        console.log($rootScope.Code); 


       actesProvider.getTiersActe(req,$rootScope.Code,function (response) { 

        if(response.response=="bad"){
        
        $ionicPopup.alert({ 

          title: 'Erreur',

          template: 'information manquante dans ce acte'

        }); 

           $location.path("/actes/"+$rootScope.numdomaine);

        }

        else{  

                var numacte = response[0].NumeroActe; 


                for (var i = 0 ; i < typeobjet.length ;i++){

                console.log(typeobjet.charAt(i));



                if(typeobjet.charAt(i)=="I"){

                actesProvider.getTiersInfo(numacte,function (response) { 

                console.log(response);

                $scope.infos = response; 


                })


                } 

                //if(typeobjet.charAt(i)=="S"){

               // actesProvider.getTiersActe(numacte,function (response) { 

                //console.log(response);

                //})


                //}  


                if(typeobjet.charAt(i)=="D"){

                actesProvider.getTiersDocument(numacte,function (response) { 

                console.log(response);

                $scope.document = response; 

                })

                }   

                if(typeobjet.charAt(i)=="O"){

                actesProvider.getTiersObjet(numacte,function (response) { 

                console.log(response);

                $scope.objet = response; 

                })

                }   

                if(typeobjet.charAt(i)=="F") {

                actesProvider.getTiersFinance(numacte,function (response) { 

                console.log(response);

                $scope.finance = response; 

                })

                }   

               }

               $scope.acteproprietaire = response; 
       	
               console.log(response);

             }
        })

      }
    }
    })



})