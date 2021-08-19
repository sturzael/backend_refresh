import mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB is connected to ' + conn.connection.host);
  } catch (err) {
    console.err(err);
  }
};

module.exports = connectDB;
