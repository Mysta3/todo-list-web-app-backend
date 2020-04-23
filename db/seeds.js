const Users = require('../models/User');
const userData = require('./seeds.json');

Users.deleteMany({})
  .then(() => {
    return Users.collection.insertMany(userData);
  })
  .then(() => {
    process.exit();
  });
