var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var bodyParser=require('body-parser');
var bearerToken = require('express-bearer-token');

var indexRouter = require('./routes/index');
var resolutionsRouter = require('./routes/resolutions');
var groupsRouter= require('./routes/groups');
var loginRouter= require('./routes/log-in-form');
var signupRouter=require('./routes/sign-up-form');
var authRouter=require('./routes/auth');

const app=express();
app.listen('3000',()=>{
    console.log('Server has started');
});

app.use(cors());
app.use(bearerToken());
app.use(bodyParser.json());
//app.options("*",cors());
app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
app.use('/', indexRouter);
app.use('/resolutions', resolutionsRouter);
app.use('/groups', groupsRouter);
app.use('/log_in_form', loginRouter);
app.use('/sign_up_form', signupRouter);
app.use('/auth', authRouter);

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
  //res.render('error');
});

module.exports = app;
