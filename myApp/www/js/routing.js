app.config(function($stateProvider, $urlRouterProvider) {

  //cette variable sera true en production
  var cache = false;

  $stateProvider

    .state('accueil', {
      url: '/',
      cache: cache,
      templateUrl: 'js/views/accueil/accueil.html'
    })

    .state('education', {
      url: '/education',
      cache: cache,
      templateUrl: 'js/views/accueil/education.html',
      controller: "accueil"
    })

    .state('medical', {
      url: '/medical',
      cache: cache,
      templateUrl: 'js/views/accueil/medical.html',
      controller: "accueil"
    })

    .state('mutuelle', {
      url: '/mutuelle',
      cache: cache,
      templateUrl: 'js/views/accueil/mutuelle.html',
      controller: "accueil"
    })

    .state('finance', {
      url: '/finance',
      cache: cache,
      templateUrl: 'js/views/accueil/finance.html',
      controller: "accueil"
    })

    .state('connexion', {
      url: '/connexion',
      cache: cache,
      templateUrl: 'js/views/connexion/connexion.html',
      controller: "accueilconnexion"
    })

    .state('sinscrire', {
      url: '/sinscrire',
      cache: cache,
      templateUrl: 'js/views/inscriptionPlateforme/sinscrire.html',
      controller: "accueilconnexion"
    }) 

    .state('menu', {
      url: '/menu/:code',
      cache: cache,
      templateUrl: 'js/views/espacemenu/menu.html',
      controller: "creationcompte"
    })
    // pour listes les domaines
    .state('domaines', {
      url: '/domaines',
      cache: cache,
      templateUrl: 'js/views/domaines/domaineslist.html',
      controller: "domaineslist"
    }) 
    // pour lister tout les actes du domaines
    .state('actes', {
      url: '/actes/:domaine',
      cache: cache,
      templateUrl: 'js/views/actes/actesliste.html',
      controller: "acteslistes"
    }) 
    //pour lister la vue des actes
    .state('actesView', {
      url: '/actes/view/:nom',
      cache: cache,
      templateUrl: 'js/views/actes/view.html',
      controller: "acteView"
    })
    .state('actesView1', {
      url: '/sousactes',
      cache: cache,
      templateUrl: 'js/views/actes/sous.html',
      controller: "actesous"
    });



  $urlRouterProvider.otherwise('/');

});
