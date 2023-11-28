const express = require('express');
const {getSavedJobs, addSavedJob, deleteSavedJob} = require('../database/savedJobs');
const router = express.Router();

const routes = function() {

  router.get("/", (req, res) => {
    getSavedJobs().then(data => {
      res.json(data);
    })
      .catch(err => {
        console.log(err.message);
        res.status(500).json({error: err.message});
      });
  });

  router.post("/", (req, res) => {
    const {
      job_posting_id,
      applied,
      company,
      job_title,
      city,
      province,
      min_salary,
      job_description,
      job_type,
      is_remote,
      posted_at,
      website,
      user_id
    } = req.body;

    addSavedJob(    
      job_posting_id,
      applied,
      company,
      job_title,
      city,
      province,
      min_salary,
      job_description,
      job_type,
      is_remote,
      posted_at,
      website,
      user_id)
      .then(data => {
      res.json(data);
    })
      .catch(err => {
        console.log(err.message);
        res.status(500).json({error: err.message});
      });
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    deleteSavedJob(id).then(data => {
      res.json(data);
    })
      .catch(err => {
        console.log(err.message);
        res.status(500).json({error: err.message});
      });
  });

  return router;
};

module.exports = routes;