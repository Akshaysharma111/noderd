const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamps");
const Schema = mongoose.Schema;
const SubjectSchema = new Schema({
  subjectCode: { type: String, required: true },
  subjectName: { type: String, required: true },
  subjectType: {
    type: String,
    default: "Regular",
    enum: ["Regular", "Elective"],
  },
  subjectStatus: {
    type: String,
    default: "Active",
    enum: ["Active", "Disabled"],
  },
  createdAt: Date,
  updateAt: Date,
});
SubjectSchema.plugin(timestamps, { index: true });
module.exports = mongoose.model("Subject", SubjectSchema);
