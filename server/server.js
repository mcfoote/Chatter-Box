const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const {typeDefs, resolvers} = require('./schemas');

const db = require('./config/connection.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//serve homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../client/src/index.html'));
})

/*
db.once('open', () => {
    app.listen(PORT, () => console.log(`... Listening on port: ${PORT} `));
});
*/

const startApolloServer = async (typeDefs, resolvers) => {

    await server.start();
    server.applyMiddleware({app});

    db.once('open', () => {
        app.listen(PORT, () => console.log(`... Listening on port: ${PORT} `));
    });

}

startApolloServer(typeDefs, resolvers);



