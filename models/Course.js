const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamps");
const Schema = mongoose.Schema;
const CousreSchema = new Schema({
  courseCode: { type: String, required: true },
  courseFullName: { type: String, required: true },
  courseNickName: { type: String, default: "" },
  courseDuration: { type: String, default: "" },
  courseMode: {
    type: String,
    default: "Semester",
    enum: ["yearly", "Semester"],
  },
  affiliatedUniversity: { type: String, default: "" },
  createdAt: Date,
  updateAt: Date,
});
CousreSchema.plugin(timestamps, { index: true });
module.exports = mongoose.model("Course", CousreSchema);
