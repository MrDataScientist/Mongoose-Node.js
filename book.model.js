'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema ({
	title: String,
	published: {
		type: Date,
		default: Date.now
	},
keywords: Array,
published: Boolean,
autor:{
	type:Schema.objectId,
	//type:Schema.Type.objectId,
	ref:'User'
	},
	
// Embedded sub-document
detail:{
modeNumber:Number,
hardcoever: Boolean,
rank: Number
}
	
}
})

module.exports = mongoose.model('Book', BookSchema);
