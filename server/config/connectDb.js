const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/";

const connectDb = async() => {
	try{
		const connect = await mongoose.connect(connectionString);
		console.log("Database connected: ", connect.connection.host, connect.connection.name);
	}
	catch(err){
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDb;