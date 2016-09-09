var db = require('./db.js').db;
///////// creation de models pour la base de données

var Acte = require('./ActeModel.js').Acte;
var Objet = require('./ObjetModel.js').Objet;

var Rubrique = db.define('rubrique',{
    Code: {type: "text", size: 255},
    Nom: {type: "text", size: 255},
    Compte:{type: "text", size: 255},
    Type: {type: "text", size: 255},
    Base: {type: "text", size: 255},
    Nombre: Number,
    AssocType: {type: "text", size: 255},
    PrixUnitaire: Number,
    MontantHT:Number,
    MontantTTC: Number,
    Tva: Number,
    CalculTva: {type: "text", size: 255},
    Remise: Number,
    MontantRemise: Number,
    Taxe: Number,
    TypeLien: {type: "text", size: 255},
    NumeroLien: Number,
    Description: {type: "text", size: 255}
    
});
Rubrique.hasOne('acte', Acte, {reverse:"acte"} );
Rubrique.hasOne('objet', Objet, {reverse:"objet"});

Rubrique.sync(function (err) {
    !err && console.log("done!");
});

exports.Rubrique = Rubrique; 