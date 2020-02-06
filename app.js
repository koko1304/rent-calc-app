const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
	res.send("Hello, Mr Ratna");
});

app.listen(port, () => {
	console.log("Server is now up and running");
});
