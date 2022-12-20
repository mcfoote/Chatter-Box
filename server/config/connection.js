
const mongoose = require('mongoose');


mongoose.connect( 'target', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

module.exports = mongoose.connection;