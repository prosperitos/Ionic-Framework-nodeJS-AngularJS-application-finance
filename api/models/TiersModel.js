var db = require('./db.js').db;
///////// creation de models pour la base de données

var Tiers = db.define('tiers', {
    Numero: {type: 'serial', key:true},
    Nature: {type: "text", size: 255},
    Type : {type: "text", size: 255},
    code: {type: "text", size: 255},
    CodeSecurite: {type: "text", size: 255},
    Nom: {type: "text", size: 255},
    Titre: {type: "text", size: 255},
    Adresse: {type: "text", size: 255},
    Pays: {type: "text", size: 255},
    Ville: {type: "text", size: 255},
    Telephone: {type: "text", size: 255},
    BoitePostale: {type: "text", size: 255},
    email: {type: "text", size: 255},
    Rang: Number,
    Description: {type: "text", size: 255},
    NumeroCompte: {type: "text", size: 255},
    
    DateNaissance: Date,
    Age: Number
  });

 Tiers.sync(function (err) {
    !err && console.log("done!");
});

exports.Tiers = Tiers; 