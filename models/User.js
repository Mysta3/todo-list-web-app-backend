const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
  uid: String,
  list: [],
});

const Users = mongoose.model('users', UserSchema);

module.exports = Users;
