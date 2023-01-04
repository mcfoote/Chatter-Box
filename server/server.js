const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const userRoutes = require("./routes/userRoutes")

const db = require('./config/connection.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/user',userRoutes)

// stores the server and options to 'server' variable
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});


//serve homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../client/src/index.html'));
})


const startApolloServer = async (typeDefs, resolvers) => {

    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => console.log(`... Listening on port: ${PORT} `));
    });

}

startApolloServer(typeDefs, resolvers);



