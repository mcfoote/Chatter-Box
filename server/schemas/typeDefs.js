const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        username: String
        email: String!
        password: String!
        messages: [String]
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

    type Query {
        user(userId: ID): User
        users: [User]!
    }

    type Mutation {
        createUser(name: String!, username: String, email: String!, password: String!): Auth
        createMessage(userId: ID, message: String): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;