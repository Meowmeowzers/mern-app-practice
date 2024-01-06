const asyncHandler = require("express-async-handler");

getNotes = asyncHandler(async(req, res) => {
	res.status(200).json({text:"HelloWorld"});
});

module.exports = {getNotes};