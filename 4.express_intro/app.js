const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'my secret for the session sfdjhsabwiurew938ryhfeksdjb',
  resave: false,
  saveUninitialized: false,
}))

app.use((req, res, next) => {
  User.findById('64500e6f4734c1f17142b145')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);


// For mongoose connection.
mongoose.connect('mongodb+srv://amrsanu:Root123@cluster0.cdopsge.mongodb.net/shop?retryWrites=true&w=majority')
    .then(result => {
      User.findOne()
        .then(user => {
          if (!user){
            const user = new User({
              name: 'Amrendra',
              email: 'amrsanu@gmail.com',
              items: []
            });
            user.save();
          }
      });
      app.listen(3000);
    })
    .catch(err => console.log(err));