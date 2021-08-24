import mongoose = require('mongoose');
import colors = require('colors');
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(
    colors.green.underline.bold(
      'MongoDB is connected to ' + conn.connection.host
    )
  );
};

module.exports = connectDB;
