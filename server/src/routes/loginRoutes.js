const express = require("express");
const router = express.Router();
const { getUserIdByEmail } = require("../database/userHelpers");

const routes = function () {
  router.post("/", (req, res) => {
    const { email } = req.body;
    // console.log("POST req login backend:", email);

    getUserIdByEmail(email)
      .then((data) => {
        // console.log("helperfx login id backend", data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/", (req, res) => {
    const { email } = req.query;
    console.log("GET Login backend:", email);

    getUserIdByEmail(email)
      .then((data) =>{
        res.json(data);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ error: err.message });
      })

  })

  

  

  return router;
};

module.exports = routes;
