const { Schema, model, MongooseError } = require('mongoose');


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = model('User', userSchema);

module.exports = User;
