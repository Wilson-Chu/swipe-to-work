const express = require('express');
const { updatePref, getPref } = require("../database/prefHelpers");
const router = express.Router();

const routes = function(pool) {

  router.get("/", (req, res) => {
    getPref(1) // hardcoded userid for now
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ error: err.message });
      });
  });

  // router.post("/", (req, res) => {
  //   const name = req.body.name;
  //   addItem(name).then(data => {
  //     res.json(data);
  //   })
  //     .catch(err => {
  //       console.log(err.message);
  //       res.status(500).json({error: err.message});
  //     });
  // });

  router.put("/", (req, res) => {

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

  // router.delete("/:id", (req, res) => {
  //   const id = req.params.id;
  //   deleteItem(id).then(data => {
  //     res.json(data);
  //   })
  //     .catch(err => {
  //       console.log(err.message);
  //       res.status(500).json({error: err.message});
  //     });
  // });

  return router;
};

module.exports = routes;