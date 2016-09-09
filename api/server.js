'use strict';
// link des modules
var orm = require("orm");
var express = require('express');
var bodyParser = require('body-parser');
var sha1 = require('sha1');
var app = express();

// Activation du body parser pour recuperer les requetes POST from the forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// creation d'un repertoire public
app.use(express.static(__dirname+'/public'));
//app.set('views',__dirname+"/views");


// link des models
var Acte  = require('./models/ActeModel').Acte;
var Infos = require('./models/InfosModel').Infos;
var Objet = require('./models/ObjetModel').Objet;
var Tiers = require('./models/TiersModel').Tiers;
var Rubrique = require('./models/RubriqueModel').Rubrique;
var TiersActe = require('./models/TiersActeModel').TiersActe;
var Document = require('./models/DocumentModel').Document;
var RelDocument=require('./models/RelDocumentModel').RelDocument;
var TiersObjet = require('./models/TiersObjetModel').TiersObjet;

exports.app=app;


/*----------------------------------------------------------------------

	Fonction permettant à un utilisateur de se connecter à son interface

------------------------------------------------------------------------*/

app.get("/connexion", function(req, res){ 

console.log(req.query.password);

  var app ={ code: req.query.login, CodeSecurite: req.query.password};


  Tiers.find(app, function(err, Tier){

    if(!err){ 

      res.json(Tier);

    }
    else{ 

      console.log('err');
    } 

  });

});  
/*-------------------------------------------------------------------------------- 


----------------------------------------------------------------------------------*/
app.post('/membreSante/add',function(req,res){
	var tier={
		Nom: req.body.nom+" "+req.body.prenom,
		Age :req.body.age ,
		DateNaissance:req.body.dateNaissance ,
		Titre :req.body.profession ,
		Nature:req.body.sexe ,
		Rang :req.body.situationMatrimoniale ,
		Description :req.body.commentaire ,
		code: req.body.login,
		CodeSecurite: req.body.password, 
		Type: "patient"
	}


	Tiers.create(tier,function(err){
		if (err)
			console.log(err);
	})

	Objet.find({modele:req.body.structure,type:"hopital"},function(err,hopitaux){
		console.log(req.body.structure);
		console.log(hopitaux[0]);
		var tobj={
			type: "hopital",
			tiers:tier,
			objet:hopitaux[0],
		
		}

		TiersObjet.create(tobj,function(err){
			if(!err)
				res.json({'resp':'ok'});
		})
	})
})

app.get('/structures/lister',function(req,res){
	
	Objet.find({or:[{type:'hopital'},{type:'mutuelle'},{type:'banque'},{type:'etablissement'}]},function(err,structures){
		if (!err){
			res.json(structures);
		}else
		console.log(err);
		
	})	
});

app.post('/authentification/:typeStructure/:idStructure',function(req,res){
	var trouve=0;
	var nb=0;
	Tiers.find({code:req.body.login,codeSecurite:req.body.password},function(err,tiers){
		//type:         
		if(!err){
			if(tiers[0]==null)
				res.json({'trouve':'faux'});
			else{
				tiers.forEach(function(tier){
						tier.getAuthentification(function(err,elt){
							
						
							elt.forEach(function(element){
								if(element.type==req.params.typeStructure && element.objet_NumeroObjet==req.params.idStructure)
									res.json(tier);
							})	
					});
					
				})
		}
		}
		else
			console.log(err);
	})
});

app.get('/hopitaux/lister',function(req,res){
	
	Objet.find({type:'hopital'},function(err,structures){
		if (!err){
			res.json(structures);
		}else
		console.log(err);
		
	})	
});

app.get('/mutuelles/lister',function(req,res){
	
	Objet.find({type:'mutuelle'},function(err,structures){
		if (!err){
			res.json(structures);
		}else
		console.log(err);
		
	})	
});

app.get('/banques/lister',function(req,res){
	
	Objet.find({type:'banque'},function(err,structures){
		if (!err){
			res.json(structures);
		}else
		console.log(err);
		
	})	
});

app.get('/etablisements/lister',function(req,res){
	
	Objet.find({type:'etablissement'},function(err,structures){
		if (!err){
			res.json(structures);
		}else
		console.log(err);
		
	})	
});


/*
app.get('/patient/:id',function(req,res){
	Tiers.find({numero:req.params.id,type:"patient"},function(err,patient){
		if(patient[0]!=null){
			patient[0].getDossier(function(err,tiersDoc){
				patient.numeroDossier=tiersDoc[0].document_NumeroDocument;
				patient.numeroPriseEnCharge=tiersDoc[0].id; 
				res.json(patient);	
			})
			

		} else res.json("patient inexisant!");
	})
})

app.delete('/patient/:id',function(req,res){
	Tiers.find({numero:req.params.id,type:"patient"}).remove(function(err){
			if (!err){
				res.json({"ok":"good"});
			}else{
				res.json({"ok":"bad"});
			}
				

		})
})

app.get('/patient/rechercher/:info',function(req,res){
	Tiers.find({type:"patient",or :[
		{numero:orm.like("%"+req.params.info+"%")},
		{Nature:orm.like("%"+req.params.info+"%")}, 	    
	    {Nom:orm.like("%"+req.params.info+"%") },
	    {Titre:orm.like("%"+req.params.info+"%") },
	    {Adresse:orm.like("%"+req.params.info+"%") },
	    {Pays:orm.like("%"+req.params.info+"%") },
	    {Ville:orm.like("%"+req.params.info+"%") },
	    {Telephone:orm.like("%"+req.params.info+"%") },
	    {BoitePostale:orm.like("%"+req.params.info+"%") },
	    {email:orm.like("%"+req.params.info+"%") },
	    {Rang:orm.like("%"+req.params.info+"%") },
	    {Description:orm.like("%"+req.params.info+"%") },
	    
		]},function(err,tiers){
			if (!err){
				if (tiers[0]!=null)
					res.json(tiers);
				else 
					res.json("aucun enregistrement trouvé");
			}
			else
			res.json("erreur requete");

	})
})
*/




app.listen(3000);
