const express = require("express");
const cors = require("cors");
const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/", require("./routes/notesRoute"));

app.listen(port, () =>{
	console.log("Hello World:", port);
});