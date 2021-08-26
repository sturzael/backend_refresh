class ErrorResponse extends Error {
  statusCode: number;
  message: string;
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
