var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const config = require('./config/keys');

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Port Number

app.use(cors());

// Set Static Folder

app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware

app.use(bodyParser.json());

// Passport Middleware

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Index Route

app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

//DB config

const db = require('./config/keys');

// connect to mongoDB

mongoose
  .connect(db.mongoURI, {
    useNewUrlParser: true
  })
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
