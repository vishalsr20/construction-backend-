const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
dotenv.config();

const { sequelize } = require("./models");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend API running");
});
app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);

const PORT = process.env.PORT || 5000;

// Database connection
sequelize.authenticate()
  .then(() => {
    console.log("MySQL connected");
  })
  .catch(err => {
    console.error("DB error:", err);
  });

// Sync tables
sequelize.sync()
  .then(() => {
    console.log("Tables synced");
  })
  .catch(err => {
    console.error("Sync error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});