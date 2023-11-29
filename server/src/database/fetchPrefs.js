const axios = require("axios");

const fetchPrefs = function() {
  
  return axios
    .get("/api/prefs")
    .then((res) => {
      // const {id, job_title, company, city, province, min_salary, job_type, is_remote, no_experience_required, min_education_level, user_id} = res;
    return res;
    })
    .catch((error) => console.log(error.message));
}

module.exports = fetchPrefs;