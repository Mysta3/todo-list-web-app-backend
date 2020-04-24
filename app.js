const cors = require('cors');
const usersController = require('./controllers/user');
const express = require('express');
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/users');
});

app.use('/users', usersController);

app.set('port', 3001);

app.listen(app.get('port'), () => {
  console.log(`PORT: ${app.get('port')}`);
});
