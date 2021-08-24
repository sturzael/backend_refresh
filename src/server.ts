// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: __dirname + '/config/.env' });

import express from 'express';

//Packages
import morgan = require('morgan');
import colors = require('colors');
//Routes
import bootcamps = require('./routes/bootcamps');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const connectDB = require('./config/db');

connectDB();

//set express && port
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(morgan('dev'));

//Mount Router
app.use('/api/v1/bootcamps', bootcamps);

const server = app.listen(
  port,
  console.log(
    colors.yellow.bold(
      `Server running on port ${port} in ${process.env.NODE_ENV}`
    )
  )
);

//rejection handling
process.on('unhandledRejection', (err: any) => {
  console.log(colors.red(`Unhandled rejection error: ${err.message} `));

  server.close(() => process.exit(1));
});
