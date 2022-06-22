const express = require("express");
const routes = require("./routes");
const env = require("dotenv");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
