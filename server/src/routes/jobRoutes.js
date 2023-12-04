const express = require('express');
const router = express.Router();
const axios = require('axios');
const {fetchData} = require("../database/fetchData")


const routes = function() {

  router.get("/", (req, res) => {
    // console.log("fetchdata test", req.query);
    const userId = parseInt(req.query.userId);
    // console.log("fetchdata test", typeof(userId))

    fetchData(userId)
      .then(data => res.json(data.data))
      .catch(error => console.error(error, "job route error"));

  })

  return router;
}

module.exports = routes;

