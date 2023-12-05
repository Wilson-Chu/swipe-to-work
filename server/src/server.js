require('dotenv').config();
const express = require("express");
const uniqid = require('uniqid');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// serve static files from ../build (needed for React)
const cwd = process.cwd();
const public = path.join(cwd, '..', 'public');
app.use(express.static(public));
// Note: Do Not make a route for "/" below or it will override our static public

app.use(cors());

// So we can read JSON body requests
app.use(express.json());
app.use(morgan('dev'));

// Connect to Database
const pool = require('./database/connect');

// Use Routed Endpoints
const prefRoutes = require("./routes/prefRoutes");
app.use("/api/prefs", prefRoutes(pool));

const savedRoutes = require("./routes/savedRoutes");
app.use("/api/savedJobs", savedRoutes(pool));

const jobRoutes = require("./routes/jobRoutes");
app.use("/api/jobs", jobRoutes(pool));

const loginRoutes = require("./routes/loginRoutes");
app.use("/api/login", loginRoutes(pool));


// Simple Endpoint - no routes module
app.get("/api/status", (req, res) => {
  res.json({version: "1.01"});
});

app.use(function(req, res) {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});