const {Schema, model} = require('mongoose');

const messegeSchema = new Schema({   
    createdAt: {
        type: Date,
        default: Date.now,
      },
      messege: {
        type: String,
        maxLength: 500,
      },
});



const User = model('Messege', messege)