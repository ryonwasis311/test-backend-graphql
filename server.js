const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const jwt = require("jsonwebtoken");


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

const connectDB = require("./config/db");


const typeDefs = require("./graphql/schemas/schemas");
const resolvers = require("./graphql/resolvers/resolvers");

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.header("Authorization");
      if (token) {
        return {
          user: jwt.verify(token, process.env.JWT_SECRET),
        };
      }
      return null;
    },

  });
  await server.start();
  await connectDB();

  server.applyMiddleware({ app, path: "/graphql" })
}
startServer();

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`GRAPHQL SERVER RUNNING HERE http://localhost:${PORT}/graphql`)
)