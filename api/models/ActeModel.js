var db = require('./db.js').db;
///////// creation de models pour la base de données
var Acte =db.define("acte", {

  NumeroActe: { type: 'serial', key: true },
  Code: String,
  Type: String,
  Nom: String,
  DateActe:  Date,
  TauxTVA: Number,
  MontantHT: Number,
  MontantTaxe: Number,
  MontantTVA: Number,
  MontantTTC: Number,
  MontantLettre: Number,
  MontantRestant: Number,
  MontantTotalRegle: Number,
  InfoSupp: String,
  Valide: String,
  Facture: String,
  Transfere: Number,
  Regle: Number,
  Descriptions: String
         });

   
Acte.sync(function (err) {
    !err && console.log("done!");
});

exports.Acte = Acte;