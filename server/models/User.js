//local requirements
const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    //todo define schema
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'User must enter a valid email address.']
    },
    password: {
        type: String,
        required: true
    },
    messages: {
        
    }
    
});

//todo user authentication

const User = model('User', userSchema);

module.exports = User;