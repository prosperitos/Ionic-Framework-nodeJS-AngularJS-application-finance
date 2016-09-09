var db = require('./db.js').db;

var Infos = db.define('infos', {
    // properties
    NumeroInfos : { type: 'serial', key: true },
    Groupe      : String,
    Valeur      : String,
    Rang        : Number,
    Type        : Number,
    Nature      : String,
    TypeLien    : String,
    NumeroLien  : Number,
    Description : String
}, {
    // options (optional)
});

// creation du model Infos dans la base de données
Infos.sync(function (err) {
    !err && console.log("done!");
});

exports.Infos = Infos;