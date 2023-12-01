const express = require('express');
const router = express.Router();
const axios = require('axios');
const {fetchData} = require("../database/fetchData")


const routes = function() {

  router.get("/", (req, res) => {
    console.log("fetchdata test")
    fetchData()
      .then(data => res.json(data.data))
      .catch(error => console.error(error, "job route"));

  })

  return router;
}

module.exports = routes;

