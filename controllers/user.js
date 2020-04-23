const express = require('express');
const router = express.Router();
const Users = require('../models/User');

router.get('/', (req, res) => {
  Users.find({}).then((user) => res.json(user));
});

router.post('/', (req, res) => {
  Users.create({
    email: req.body.email,
    password: req.body.password,
    todoList: [],
  }).then((user) => res.json(user));
});

module.exports = router;
