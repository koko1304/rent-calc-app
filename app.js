const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 8080;
const publicDir = path.join(__dirname, "/frontend/build");

app.use(express.static(publicDir));

app.get("/", (req, res) => {
	res.send("Hello, Mr Ratna");
});

app.listen(port, () => {
	console.log("Server is now up and running");
});
