const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter');
const meetupRouter = require('./routes/meetupRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/meetups', meetupRouter);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: error.message });
});

module.exports = app;
