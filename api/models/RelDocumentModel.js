var db = require('./db.js').db;
var Document=require('./DocumentModel.js').Document;

var RelDocument = db.define('relDocument',{
	numero: { type: 'serial', key: true },
	element: {type: 'integer'},
	typeLien: String,
	type: String,

 
});
RelDocument.hasOne('document', Document, {reverse:"document"} );

RelDocument.sync(function (err) {
    !err && console.log("done!");
});

exports.RelDocument = RelDocument;