const express = require("express");
//import ApolloServer
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");

//import our typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const path = require("path");
const db = require("./config/connection");
const PORT = process.env.PORT || 3001;

const app = express();

const startServer = async () => {
  //create a new Apollo server and pass in our schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  //start the apollo server
  await server.start();

  //integrate our Apollo server with Express app as middleware
  server.applyMiddleware({ app });

  //log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// Initialize the APollo server
startServer();

app.use(express.urlencoded({ extended: false })); //this is basically saying that we want to use the express.urlencoded middleware
app.use(express.json()); //this is basically saying that we want to use the express.json middleware

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  console.log(`API server running on port ${PORT}`);
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
