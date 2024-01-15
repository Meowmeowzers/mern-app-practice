const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: String,
	author: String
},
{
	timestamps: true
});

module.exports = mongoose.model("Entry", entrySchema);