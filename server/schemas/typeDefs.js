const {gql} = require('apollo-server-express');

const typeDefs = gql`

    type Query {

    }

    type Mutation {
        login(email: String!, password: String!): Auth
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Message {
        _id: ID
        message: String!
        date: String
    }

    type Auth {
        token: ID!
        user: User
    }

`;

module.exports = typeDefs;