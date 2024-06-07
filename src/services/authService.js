const User = require('../models/user');
// TIODO: Check if user exists
exports.register = (userData) => User.create(userData);


