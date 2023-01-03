const { gql } = require('apollo-server-express');
// when we query 'user' on graphql, we look for the userId we pass into it to find the one that matches the ID, then we return the cooresponding user
// when we query 'users', we return all the users

const typeDefs = gql`

    type Query {
        user(userId: ID!): User
        users: [User]!
        message(messageId: ID!): User
        messages: [Message]!
        me:[User]!
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!): Auth
        createMessage(userId: ID, message: String): Auth
        login(email: String!, password: String!): Auth
    }

    type User {
        _id: ID
        name: String
        username: String
        email: String!
        password: String!
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