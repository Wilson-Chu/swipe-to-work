const express = require('express');
const { updatePref, getPref } = require("../database/prefHelpers");
const router = express.Router();

const routes = function(pool) {

  router.post("/", (req, res) => {
    const { userId } = req.body;
    // console.log("POST req body backend:", req.body)

    // console.log("prefRoutes.jsx: ", userId);
    getPref(Number(userId))
      .then((data) => {
        console.log("POST pref:", data)
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
        console.log(err.message);
      })
  });

  router.get("/", (req, res) => {

    const { userId } = req.query;
    console.log("prefRoutes GET", req.query);

    getPref(Number(userId)) 
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ error: err.message });
      });
  });

  router.put("/", (req, res) => {
    // console.log(req.headers)
    const {
      jobTitle,
      company,
      city,
      province,
      minSalary,
      jobType,
      remote,
      experience,
      education,
      userID,
    } = req.body;

    const updatedPref = {
      jobTitle,
      company,
      city,
      province,
      minSalary,
      jobType,
      remote,
      experience,
      education
    };
    
    updatePref(updatedPref, Number(userID))
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ error: err.message });
      });
  });
  
  return router;
};

module.exports = routes;