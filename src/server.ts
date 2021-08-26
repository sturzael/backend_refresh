// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: __dirname + '/config/.env' });

//Packages
import express from 'express';
import morgan = require('morgan');
import colors = require('colors');

//Middleware
import errorHandler = require('./middleware/error');

//Routes
import bootcamps = require('./routes/bootcamps');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const connectDB = require('./config/db');

connectDB();

//set express && port
const app = express();
const port = process.env.PORT || 5000;

// Body parser
app.use(express.json());

//Middleware
app.use(morgan('dev'));

//Mount Router
app.use('/api/v1/bootcamps', bootcamps);

//Error handler
app.use(errorHandler);

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
