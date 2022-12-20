const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
});

const Message = model('Message', messageSchema);

module.exports = Message