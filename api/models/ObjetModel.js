var db = require('./db.js').db;

var Objet=db.define("objet",{
  NumeroObjet :{ type: 'serial', key: true },
  CodeSecurite :String,
  Type : String,
  Nom : String,
  PrixUnitaireVente : Number,
  PrixUnitaireAchat : Number,
  NombreColis : Number,
  NatureColis : Number,
  poidsBrut : Number,
  PoidsNet : Number,
  ValeurBrute : Number,
  ValeurNette :Number,
  Marque :String,
  Modele :String,
  StockMini :Number,
  StockReappro :Number,
  StockMaxi : Number,
  StockReel : Number,
  Emplacement : String,
  ReapproAutomatique : Number,
  Compte : String,
  CalculTva : Number,
  Taxe : Number,
  Description : String
});

Objet.sync(function (err) {
    !err && console.log("done!");
});

exports.Objet = Objet;