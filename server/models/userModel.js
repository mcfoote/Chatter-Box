const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      unique: true,
      required: true,
    },
    password: {
      type: "String",
      required: true,
    },
    //Tested Picture Functionality couldnt do it so i made it a corgi for fun
    pic: {
      type: "String",
      required: true,
      default:
        "https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestaps: true }
);
//checking matched password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
//hashing passwords for security purposes
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = model("User", userSchema);

module.exports = User;
