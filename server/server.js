const express = require("express");
const cors = require("cors");
const connectDb = require("./config/connectDb");

const port = 4000;
const app = express();

connectDb();

app.use(express.json());
app.use(cors());

app.use("/", require("./routes/notesRoute"));

app.listen(port, () =>{
	console.log("Hello World:", port);
});