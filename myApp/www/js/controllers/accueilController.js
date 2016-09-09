app

  .controller("accueilconnexion", function ($scope, $state, $stateParams, $rootScope, recupereracteuserProvider, authentificationProvider, recuperationacteProvider, recuperationdomaineProvider, recuperationtypeProvider, inscriptionProvider, $location, $ionicPopup, accueilProvider) {
  
  $scope.verifier = function(tiers){  

  authentificationProvider.verification(tiers, function(Tier){ 



  if(Tier.length == 0){ 

    console.log('le login ou le mots de passe est incorect');
    
    $ionicPopup.alert({ 

          title: 'Erreur',

          template: 'Le login ou le mots de passe est incorrect'

        }); 
    }

    else { 
      
    $rootScope.tiers=Tier[0];

    $rootScope.Code=Tier[0].Code;

    console.log($rootScope.tiers);

    $location.path("/domaines");

    }


  })

  }; 

     $scope.inscrire = function(tiers) { 

     var confirmPopup = $ionicPopup.confirm({ 

     title: 'Inscription', 

     template: 'Voulez vous vous inscrire??'

     });

     confirmPopup.then(function(res) { 

     if(res) { 

     inscriptionProvider.add(tiers, function(relation){

        $ionicPopup.alert({ 

          title: 'Succes',

          template: 'Votre enregistrement a reuissi'
        }); 

      });

       $location.path("/connexion");

     } else { 
       console.log('You are not sure');
     }
   });
 };

    //redirection vers la page connexion
   
        //$location.path("/connexion");
    

    //redirection vers la page s'inscrire 

    $scope.sinscrire = function () {
    
    console.log('bonjour');
    
    $location.path("/sinscrire");

    };

    $scope.annuler = function () { 

      $location.path("/connexion"); 

    }; 


  })   // controlleur pour la creation de compte

  .controller("creationcompte", function ($scope, $state, $rootScope, recuperationProvider, comptecreerProvider, $stateParams, $location, $ionicPopup, accueilProvider) { 
   
   //recuperation de code de l'utilisateur connecte

   var recupcode = $stateParams.code;

    // creation de lobjet date et recuperation de l'annee et du mois 


    var d = new Date();

    var app = {"log": recupcode};

    $scope.infos=app;

    var annee= d.getFullYear();

    var mois=d.getMonth();

    var t = 0;
  
    recuperationProvider.taille(function(Tier){
  
    // affichage du numeros de compte sur la vue menu

    t = Tier.length +1;

    var num=annee+"SN"+mois+""+t;

    var tier = { "code":num}; 

    $scope.tiers = tier;

    })
 
  // fonction permettant l'insertition dans la base de donnee des infos de creation de compte


     $scope.creercompte = function(infos) { 


     var confirmPopup = $ionicPopup.confirm({ 

     title: 'Creer un compte', 

     template: 'Voulez vous creer le compte??'

     });

     confirmPopup.then(function(res) { 

     if(res) { 

     comptecreerProvider.add(infos,function(relation){

     $ionicPopup.alert({ 

          title: 'Succes',

          template: 'Votre enregistrement a reuissi'

        }); 

        console.log(relation.resp);

      });

       $location.path("/connexion");

     } else {  

       console.log('You are not sure'); 
       
     }
   });
 };

  })
