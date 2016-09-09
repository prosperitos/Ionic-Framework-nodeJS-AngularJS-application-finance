var db = require('./db.js').db;

var Document=db.define("document",{
  NumeroDocument: { type: 'serial', key: true },
  Type: String,
  Nom:String,
  Nature: String,
  NomComplet: String,
  Description: String
}) ;

// creation du model User dans la base de données
Document.sync(function (err) {
    !err && console.log("done!");
});

exports.Document = Document;