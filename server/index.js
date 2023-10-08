const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addName } = require('./controller');

app.post("/api/names", addName);
app.get("/api/fortune", getFortune);
app.get("/api/compliment", getCompliment);
// app.get("/api/compliment", addCompliment); // this is the non working button refer to bottom of main.js

app.listen(4000, () => console.log("Server running on 4000"));
