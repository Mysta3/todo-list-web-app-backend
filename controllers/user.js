const express = require('express');
const router = express.Router();
const Users = require('../models/User');

router.get('/', (req, res) => {
  Users.find({}).then((user) => res.json(user));
});

router.get('/:uid', (req, res) => {
  Users.find({ uid: req.params.uid })
    .then((user) => res.json(user[0].list))
    .catch((err) => {
      console.log(err, 'something went wrong');
    });
});

router.post('/', (req, res) => {
  let newUser = req.body;
  Users.create(newUser)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err, 'something went wrong');
    });
});

// router.delete('/:email', (req, res) => {
//   Users.findOneAndDelete({ email: req.params.email }).then((user) =>
//     res.json(user)
//   );
// });

module.exports = router;
