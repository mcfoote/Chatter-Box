const {gql} = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        // when we query 'user' on graphql, we look for the userId we pass into it to find the one that matches the ID, then we return the cooresponding user
        user(userId: ID!): User
        // when we query 'users', we return all the users
        users: [User]!
        message()
        messages

    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!)
        createMessage(userId: ID, message: String): User
        login(email: String!, password: String!): Auth
        // as resolvers are implemented, uncomment accordingly but leave commented out to not break querying
        // updateName
        // updateUsername
        // updateEmail
        // updatePassword
        // updateMessage
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