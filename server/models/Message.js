const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
        maxLength: 500,
    },
    createdAt: {
        timestamps: true,
        type: Date,
        default: Date.now,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

const Message = model('Message', messageSchema);

module.exports = Message