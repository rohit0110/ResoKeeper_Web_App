var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var indexRouter = require('./routes/index');
var resolutionsRouter = require('./routes/resolutions');
var groupsRouter= require('./routes/groups');
var loginRouter= require('./routes/log-in-form');

//what i have written
const mysql=require('mysql');

//CREATE CONNECTION
const db=mysql.createConnection({
  host:'localhost',
  user:'resokeeper',
  password:'kz28DMv/5DW/-GW',
  database: 'ResoKeeper_Database'
});

//CONNECT
db.connect((err)=>{
  if(err){
    throw err;
  }
  console.log("MySQL connected");
});

const app=express();
app.listen('3000',()=>{
    console.log('Server has started');
});

app.use(cors());
//app.options("*",cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
app.use('/', indexRouter);
app.use('/resolutions', resolutionsRouter);
app.use('/groups', groupsRouter);
//app.use('/log_in_form', loginRouter);

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
