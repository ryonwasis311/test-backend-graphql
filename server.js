const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const jwt = require("jsonwebtoken");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const app = express();

const connectDB = require("./config/db");

app.get("/",(req,res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;
app.listen( PORT, () =>
    console.log(`GRAPHQL SERVER RUNNING HERE http://localhost:${PORT}/graphql`)
    )