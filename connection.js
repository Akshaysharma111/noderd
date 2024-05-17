const mongoose = require("mongoose");
const connect = async () => {
  try {
    let connection = await mongoose.connect(
      "mongodb://localhost:27017/rd-academic",
      {
        useNewUrlParser: true,
      }
    );
    console.log("Data Base Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
