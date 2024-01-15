const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const entry = require("../models/entryModel");

getNotes = asyncHandler(async(req, res) => {
	res.status(200).json({
		data:[
			"Hello World",
			"Hello World",
			"Hello World",
			"Hello World",
			"Hello World"
		]
	});
	console.log("Get");
});

createNote = asyncHandler(async(req, res) => {
	const newEntry = await entry.create({
		title: "Test Note",
		content: "Body",
		author: "Me"
	})
	res.status(201).json(newEntry);
})

module.exports = {getNotes, createNote};