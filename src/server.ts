import express from 'express';
import dotenv = require('dotenv');

//Packages
import morgan = require('morgan');

//Routes
import chores = require('./routes/chores');

//load env variables
dotenv.config({ path: './config/config.env' });

//set express && port
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(morgan('dev'));

//Mount Router
app.use('/api/v1/chores', chores);

app.listen(
  port,
  console.log(`Server running on port ${port} in ${process.env.NODE_ENV}`)
);
