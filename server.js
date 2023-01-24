const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/questions", (req, res) => {
  return res.status(200).json(data);
});
app.listen(3001, () => console.log("server running at PORT:3001"));
