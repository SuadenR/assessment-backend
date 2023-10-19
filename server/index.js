const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addName, addCompliment } = require('./controller');

app.post("/api/names", addName);
app.get("/api/fortune", getFortune);
app.get("/api/compliment", getCompliment);
app.post("/api/compliment", addCompliment); 

app.listen(4000, () => console.log("Server running on 4000"));
