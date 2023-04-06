const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const reciever = require("./req_test/reciever");

app.use(bodyParser.json());
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/reciever", reciever);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
