const express = require('express');
const router = express.Router();
const Users = require('../models/User');

router.get('/', (req, res) => {
  Users.find({}).then((user) => res.json(user));
});

router.get('/:uid', (req, res) => {
  Users.findOne(req.body.uid)
    .then((user) => res.json(user.list))
    .catch((err) => {
      console.log(err);
    });
});

// router.post('/', (req, res) => {
//   Users.create({
//     _id: req.body.id,
//     list: [],
//   }).then((user) => res.json(user));
// });

// router.delete('/:email', (req, res) => {
//   Users.findOneAndDelete({ email: req.params.email }).then((user) =>
//     res.json(user)
//   );
// });

module.exports = router;
