const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

    # type Chat {
    #     _id: ID
    #     chatName: String
    #     isGroupChat: Boolean
    #     users: [String]
    #     latestMessage: String
    #     groupAdmin: String
    # }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(userId: ID): User
        users: [User]!
        message(messageId: ID!): Message
        messages: [Message]!
        # chat: [Chat]!
    }

    type Mutation {
        createUser(name: String!, username: String, email: String!, password: String!): Auth
        createMessage(userId: ID, message: String): User
        login(email: String!, password: String!): Auth
        # creatChat(chatName: String!, users: String)
    }
`;

module.exports = typeDefs;