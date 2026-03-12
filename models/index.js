const sequelize = require("../config/db");

const User = require("./user.model");
const Project = require("./project.model");
const DailyReport = require("./dailyreport.model");

// Relationships

// User creates many projects
User.hasMany(Project, {
  foreignKey: "created_by"
});

Project.belongsTo(User, {
  foreignKey: "created_by"
});

// Project has many DPRs
Project.hasMany(DailyReport, {
  foreignKey: "project_id"
});

DailyReport.belongsTo(Project, {
  foreignKey: "project_id"
});

// User submits many DPRs
User.hasMany(DailyReport, {
  foreignKey: "user_id"
});

DailyReport.belongsTo(User, {
  foreignKey: "user_id"
});

module.exports = {
  sequelize,
  User,
  Project,
  DailyReport
};