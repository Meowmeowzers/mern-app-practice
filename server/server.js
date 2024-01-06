const express = require("express");
const app = express();

const port = 4000;

app.use(express.json());

app.use("/", require("./routes/notesRoute"));

app.listen(port, () =>{
	console.log("Hello World:", port);
});