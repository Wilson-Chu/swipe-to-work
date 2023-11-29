const express = require('express');
const router = express.Router();
const axios = require('axios');
const {fetchData} = require("../database/fetchData")


const routes = function() {

  router.get("/", (req, res) => {
    fetchData()
      .then(data => res.json(data.data));
  })

  return router;
}

module.exports = routes;

