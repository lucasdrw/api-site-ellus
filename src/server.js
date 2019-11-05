require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 4444);
