const express = require("express");

const router = express.Router();
const BranchController = require("../controllers/BranchController");
router.post("/branch/create", (req, res) => {
  BranchController.createBranch(req, res);
});
router.get("/branches", (req, res) => {
  BranchController.getBranches(req, res);
});
module.exports = router;
