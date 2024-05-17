const express = require("express");

const router = express.Router();
const CourseController = require("../controllers/CourseController");
router.post("/course/create", (req, res) => {
  CourseController.createCourse(req, res);
});
router.get("/courses", (req, res) => {
  CourseController.createCourses(req, res);
});
module.exports = router;
