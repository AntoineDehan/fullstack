const express = require("express");
const mongoose = require("mongoose");

const stuffRoutes = require("./routes/stuff");

// Connexion MongoDB
mongoose
  .connect(
    "mongodb+srv://john:user@nodejs.euymz9z.mongodb.net/?retryWrites=true&w=majority&appName=NodeJS"
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// Middlewares
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/stuff", stuffRoutes);

module.exports = app;
