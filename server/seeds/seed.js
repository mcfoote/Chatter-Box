const db = require('../config/connection.js');

const {User, Message} = require('../models');

const userData = require('./userData.json');
const messageData = require('./messageData.json');


db.once('open', async() => {

    await User.deleteMany({});
    await Message.deleteMany({});

    const users = await User.insertMany(userData);
    console.log('User Data successfully seeded');

    const messages = await Message.insertMany(messageData);
    console.log('Message Data successfully seeded');

    process.exit(0);

});