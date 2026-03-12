const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const DailyReport = sequelize.define("DailyReport", {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  project_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  date: {
    type: DataTypes.DATE
  },

  work_description: {
    type: DataTypes.TEXT
  },

  weather: {
    type: DataTypes.STRING
  },

  worker_count: {
    type: DataTypes.INTEGER
  },

  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }

}, {
  tableName: "daily_reports",
  timestamps: false
});

module.exports = DailyReport;