import colors = require('colors');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ErrorResponse = require('../utils/errorResponse');

// @desc    Error handler
const errorHandler = (err, req, res, next) => {
  console.log(colors.red(err.stack));

  let error = { ...err };
  error.message = err.message;
  if (err.name === 'CastError') {
    const message = `Bootcamp not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
