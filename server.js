const express = require('express');
const dotenv = require('dotenv');

//load env variables
dotenv.config({ path: './config/config.env' });

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port} in ${process.env.NODE_ENV}`));