const { signToken } = require('../util/auth');
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
        },
        // query signed on user baed on the middleware context passed to the server
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        createUser: async (parent, { name, email, password }) => {
            const user = await User.create({ name, email, password });
            const token = signToken(user);
            return { token, user };
        },
        createMessage: async (parent, args, context) => {
            // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
            if (context.user) {
                const message = await Message.create(args);
                // returns the message as well as the user that created it
                return { message, user };
            }

        },
        login: async (parent, { email, password }) => {
            // we find a single user based on the email object and assign taht to 'user' variable
            const user = await User.findOne({ email, password });

            // if theres no user with matching email, we let the user know
            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }

            // we use the virtual method defined in the user schema to check the password entered with the hashed password in the database
            const validPw = await profile.isCorrectPassword(password);

            // if the passwords dont match we throw an error
            if (!validPw) {
                throw new AuthenticationError('Incorrect password, try again.');
            }

            const token = signToken(user);
            // we return the signed token as well as the user that signed the token
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