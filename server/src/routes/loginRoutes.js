const express = require("express");
const router = express.Router();
const { getUserIdByEmail } = require("../database/userHelpers");

const routes = function () {
  router.get("/", (req, res) => {
    const { email } = req.query;
    console.log("req query login backend", req.query);

    getUserIdByEmail(email)
      .then((data) => {
        console.log("backend login", data);
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
