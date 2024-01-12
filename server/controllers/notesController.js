const asyncHandler = require("express-async-handler");

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

module.exports = {getNotes};