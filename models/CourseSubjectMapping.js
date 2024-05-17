const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamps");
const Schema = mongoose.Schema;
const CourseSubjectMappingSchema = new Schema({
  session: { type: String, required: true },
  subject: { type: Schema.Types.ObjectId, ref: "Subject", require: true },
  course: { type: Schema.Types.ObjectId, ref: "Course", require: true },
  branch: { type: Schema.Types.ObjectId, ref: "Branch", require: true },
  year: { type: Number, default: 1 },
  semister: { type: Number, default: 1 },
  createdAt: Date,
  updateAt: Date,
});
CourseSubjectMappingSchema.plugin(timestamps, { index: true });
module.exports = mongoose.model(
  "CourseSubjectMapping",
  CourseSubjectMappingSchema
);
