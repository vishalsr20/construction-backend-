const { DailyReport, Project } = require("../models");


// Create DPR
exports.createDPR = async (req, res) => {

  try {

    const projectId = req.params.id;

    const { date, work_description, weather, worker_count } = req.body;

    // check if project exists
    const project = await Project.findByPk(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const report = await DailyReport.create({
      project_id: projectId,
      user_id: req.user.id,
      date,
      work_description,
      weather,
      worker_count
    });

    res.status(201).json({
      dprId: report.id,
      message: "Daily Progress Report created successfully"
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};



// Get DPRs for a project
exports.getProjectDPRs = async (req, res) => {

  try {

    const projectId = req.params.id;

    const { date } = req.query;

    const whereClause = {
      project_id: projectId
    };

    if (date) {
      whereClause.date = date;
    }

    const reports = await DailyReport.findAll({
      where: whereClause
    });

    res.json(reports);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};