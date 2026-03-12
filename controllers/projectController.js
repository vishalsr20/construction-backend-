const { Project, DailyReport } = require("../models");


// Create Project
exports.createProject = async (req, res) => {

  try {

    const { name, description, start_date, end_date, status } = req.body;

    const project = await Project.create({
      name,
      description,
      start_date,
      end_date,
      status,
      created_by: req.user.id
    });

    res.status(201).json({
      projectId: project.id,
      message: "Project created successfully"
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// Get All Projects
exports.getProjects = async (req, res) => {

  try {

    const { status, limit = 10, offset = 0 } = req.query;

    const whereClause = {};

    if (status) {
      whereClause.status = status;
    }

    const projects = await Project.findAll({
      where: whereClause,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });

    res.json(projects);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// Get Single Project
exports.getProjectById = async (req, res) => {

  try {

    const project = await Project.findByPk(req.params.id, {
      include: [DailyReport]
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// Update Project
exports.updateProject = async (req, res) => {

  try {

    const project = await Project.findByPk(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    await project.update(req.body);

    res.json({
      message: "Project updated successfully"
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// Delete Project
exports.deleteProject = async (req, res) => {

  try {

    const project = await Project.findByPk(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    await project.destroy();

    res.json({
      message: "Project deleted successfully"
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};