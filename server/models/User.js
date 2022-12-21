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
    messages: [
        mongoose.Schema.Types.ObjectId
    ]
    
});

//todo user authentication
// set up pre-save middleware to create password
profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };



const User = model('User', userSchema);

module.exports = User;