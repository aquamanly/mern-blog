const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    }
});

const User = mongoose.model('User', usersSchema);

module.exports = User;