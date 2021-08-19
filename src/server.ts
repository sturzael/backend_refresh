import express from 'express';
import dotenv = require('dotenv');

//load env variables
dotenv.config({ path: './config/config.env' });

const app = express();
const port = process.env.PORT || 5000;

//Routes
import chores = require('./routes/chores');

//Mount Router
app.use('/api/v1/chores', chores);

app.listen(
  port,
  console.log(`Server running on port ${port} in ${process.env.NODE_ENV}`)
);
