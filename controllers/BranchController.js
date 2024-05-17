const Branch = require("../models/Branch");
const createBranch = async (req, res) => {
  try {
    let branch = new Branch(req.body);
    branch = await branch.save();
    res.status(500).send({ sucess: true, message: "course created", data: "" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ sucess: false, message: "problem", data: "" });
  }
};
const getBranches = async (req, res) => {
  try {
    let branches = await Branch.find({}).populate("course");
    console.log(branches, "branches");
  } catch (err) {
    res.status(500).send({ sucess: false, message: "problem", data: "" });
  }
};
module.exports = {
  createBranch,
};
