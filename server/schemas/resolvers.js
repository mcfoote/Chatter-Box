const { User } = require('../models/User');
const { Message } = require('../models/Message');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    //todo define resolvers
    Query: {

    },

    Mutation: {

    }

}

module.exports = resolvers;