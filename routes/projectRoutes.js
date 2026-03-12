const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
} = require("../controllers/projectController");

const dprRoutes = require("./dprRoutes");


// Create project (admin or manager)
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin", "manager"),
  createProject
);


// Get all projects
router.get("/", authMiddleware, getProjects);


// Get project by ID
router.get("/:id", authMiddleware, getProjectById);


// Update project
router.put("/:id", authMiddleware, updateProject);


// Delete project (admin only)
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteProject
);


// Attach DPR routes
router.use("/:id", dprRoutes);


module.exports = router;