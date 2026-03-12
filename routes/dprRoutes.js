const express = require("express");
const router = express.Router({ mergeParams: true });

const authMiddleware = require("../middleware/authMiddleware");

const {
  createDPR,
  getProjectDPRs
} = require("../controllers/dprController");


// Create DPR
router.post("/dpr", authMiddleware, createDPR);

// Get DPRs
router.get("/dpr", authMiddleware, getProjectDPRs);

module.exports = router;