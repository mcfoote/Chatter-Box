const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const db = require('./config/connection.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// stores the server and options to 'server' variable
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

//not needed yet
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/public')));
}

//serve homepage 
//todo plugin correct home page
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



