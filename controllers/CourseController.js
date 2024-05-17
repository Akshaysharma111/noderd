const Course = require("../models/Course");
const createCourse = (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send({ sucess: true, message: "data recived" });
  } catch (err) {
    console.log(err);
  }
};
const getCourses = async (req, res) => {
  try {
    let courses = await Course.find({}, "_id, corseFUllName");
    console.log(courses, "courses");
    res
      .status(200)
      .send({ sucess: true, message: "course list", data: "courses" });
  } catch (err) {
    res.status(500).send({ sucess: false, data: "" });
  }
};
module.exports = {
  createCourse,
  getCourses,
};
