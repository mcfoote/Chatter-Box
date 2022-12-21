const {User, Message} = require('../models');

const resolvers = {
    //todo define resolvers
    Query: {
        user: async() => {
            return User.find({});
        },
        message: async() => {
            return Message.find({});
        }
    },
    
    Mutation: {
        createUser: async(parent, args) => {
            const user = await User.create(args);
            return user;
        },
        createMessage: async(parent, args) => {
            const message = await Message.create(args);
            return message;
        }
    }

}

module.exports = resolvers;