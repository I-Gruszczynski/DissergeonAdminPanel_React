const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 8081;
app.use(cors());
app.use(express.json());

// Route to get all posts
app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM acticles", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
});
