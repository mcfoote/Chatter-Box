const { signToken } = require('../util/auth');
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const resolvers = {
    //todo define resolvers
    Query: {
        // to query a single user, we pass through a userId object that points to the typedefs
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        // query all users in the database
        users: async () => {
            return User.find();
        }
    },

    Mutation: {
        createUser: async (parent, { name, username, email, password }) => {
            const user = await User.create({ name, username, email, password });
            const token = signToken(user)
            return { token, user };
        },
        createMessage: async (parent, { userId, message }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                {
                    $addToSet: { messages: message },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }

            const validPw = await user.matchPassword(password);

            if (!validPw) {
                throw new AuthenticationError('Incorrect password, try again.');
            }

            const token = signToken(user);
            return { token, user };
        },
    }

}

module.exports = resolvers;