const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");
const User = require("../models/userModel");
const Chat = require("../models/chatModel");

//we will pull all messeges with this routew
const allMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      //populate will let us refrence other models
      .populate("sender", "name pic email")
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

//this route will create messeges
const sendMessage = asyncHandler(async (req, res) => {
  //recieve the messege information
  const { content, chatId } = req.body;
  //check to see if there is not content or ids
  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }
  //if there is enough info we will set the sender,content and chat to a varible
  let newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };
  //then we will set newmessege to messege which will run our create method
  try {
    let message = await Message.create(newMessage);
    //we then run our new messege
    message = await message.populate("sender", "name pic").execPopulate();
    message = await message.populate("chat").execPopulate();
    message = await User.populate(message, {
      path: "chat.users",
      select: "name pic email",
    });
    //we then update our recent messege
    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

    res.json(message);
  } catch (error) {
    //if fail then send an error
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { allMessages, sendMessage };
