var db = require('./db.js').db;
var Tiers = require('./TiersModel.js').Tiers;
var Objet = require('./ObjetModel.js').Objet;

var TiersObjet = db.define('tiersObjet',{
    type: String
});

TiersObjet.hasOne('tiers',Tiers,{reverse:"authentification"});
TiersObjet.hasOne('objet',Objet,{reverse:"objet"});

TiersObjet.sync(function (err) {
    !err && console.log("done!");
});

exports.TiersObjet = TiersObjet;