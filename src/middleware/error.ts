import colors = require('colors');

// @desc    Error handler
const errorHandler = (req, res, error, next) => {
  console.log(colors.red(error.stack));
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
