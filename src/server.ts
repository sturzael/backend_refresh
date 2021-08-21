// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: __dirname + '/config/.env' });

import express from 'express';
//Packages
import morgan = require('morgan');
import colors from 'colors';
//Routes
import chores = require('./routes/chores');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const connectDB = require('./config/db');

connectDB();

//set express && port
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(morgan('dev'));

//Mount Router
app.use('/api/v1/chores', chores);

const server = app.listen(
  port,
  console.log(
    `Server running on port ${port} in ${process.env.NODE_ENV}`.yellow.bold
  )
);

//rejection handling
process.on('unhandledRejection', (err: any) => {
  console.log(`Unhandled rejection error: ${err.message} `);

  server.close(() => process.exit(1));
});
