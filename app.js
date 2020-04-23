const usersController = require('./controllers/user');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/user', usersController);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
