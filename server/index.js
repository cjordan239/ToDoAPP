const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const db = require("./src/connection");
const response = require("./src/response");
import { getAllUser } from "./src/Queries/userQueries";

app.use(bodyParser.json());

app.get("/", (req, res) => {
  try{
    
  } catch(err) {

  }
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login berhasil");
});

app.put("/gantipassword", (req, res) => {
  console.log(req.body);
  res.send("ganti berhasil");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
