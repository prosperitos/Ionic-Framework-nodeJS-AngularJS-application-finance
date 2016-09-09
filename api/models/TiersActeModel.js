var db = require('./db.js').db;
var Tiers = require('./TiersModel.js').Tiers;
var Acte = require('./ActeModel.js').Acte;

var TiersActe = db.define('tiersActe',{
    type: String
});

TiersActe.hasOne('tiers',Tiers,{reverse:"tiers"});
TiersActe.hasOne('acte',Acte,{reverse:"acte"});

TiersActe.sync(function (err) {
    !err && console.log("done!");
});

exports.TiersActe = TiersActe;