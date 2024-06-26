const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`data base woring on ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectdb;
