const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  todoList: [String],
});

const Users = mongoose.model('users', UserSchema);

module.exports = Users;
