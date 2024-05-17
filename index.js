const express = require("express");
const app = express();
const connect = require("./connection");
const course = require("./routes/course");
const branch = require("./routes/branch");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
connect();
app.use(branch);
app.use(course);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running on port 3000");
  }
});
