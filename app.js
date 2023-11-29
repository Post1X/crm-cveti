import indexRouter from "./routes/index";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
import cors from "cors";
var morgan = require('morgan');
import sequelize from "./services/sequelize";
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

sequelize.authenticate()
    .then(() => {
      console.log('Подключение к базе данных успешно');
    })
    .catch((error) => {
      console.error('Ошибка подключения к базе данных:', error);
    });

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use(function (req, res, next) {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        status: "error",
        message: err.message,
        errors: err.errors,
    });
});

module.exports = app;
