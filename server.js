// required dependencies
const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

// allows environment variables in the .env file
require("dotenv").config();

// creates express server with the port number that the server will be hosted on
const app = express();
const PORT = process.env.PORT || 3001;

// middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// allows us to parse JSON
app.use(express.json());

// serves up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// mongoose creates connection to mongodb with the required collection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB"));

// API routes defined here
app.use(routes);

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// starts the server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
