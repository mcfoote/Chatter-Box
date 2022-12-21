const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const { User, Message } = require('../models');

const resolvers = {
    //todo define resolvers
    Query: {
        // to query a single user, we pass through a userId object that points to the typedefs
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        // query all users in the database
        users: async () => {
            return User.find({});
        },
        // query a specific/single message based on the userId and the messageId
        message: async () => {
            return Message.findOne({});
        },
        // query all messages from a user
        messages: async () => {
            return Message.find({});
        }
    },

    Mutation: {
        createUser: async (parent, { name, email, password }) => {
            const user = await User.create(args);
            return user;
        },
        createMessage: async (parent, args, context) => {
            if (context.user) {
                const message = await Message.create(args);
                return message;
            }

        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }

            const validPw = await profile.isCorrectPassword(password);

            if (!validPw) {
                throw new AuthenticationError('Incorrect password, try again.');
            }

            const token = signToken(user);
            return { token, user };
        },
        // will uncomment as functionality expands but will cause problems if left active
        // updateName: async (parent, args, context) => {

        // },
        // updateUsername: async (parent, args, context) => {

        // },
        // updateEmail: async (parent, args, context) => {

        // },
        // updatePassword: async (parent, args, context) => {

        // },
        // updateMessage: async (parent, args, context) => {

        // },
    }
}

module.exports = resolvers;