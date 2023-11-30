const axios = require("axios");
// const {fetchPrefs} = require("./fetchPrefs")
const { updatePref, getPref } = require("../database/prefHelpers");

const fetchData = async function() {

    // axios
    //   .get("/api/prefs")
    //   .then((res) => {
    //     console.log("PREFERENCES", res)
    //     const {id, job_title, company, city, province, min_salary, job_type, is_remote, no_experience_required, min_education_level, user_id} = res; 
    //   })

    //   .catch((error) => console.log(error.message));

    // fetchPrefs()
    //   .then(res => {
    //     const {id, job_title, company, city, province, min_salary, job_type, is_remote, no_experience_required, min_education_level, user_id} = res;
        
    //     const options = {
    //     method: "GET",
    //     url: "https://jsearch.p.rapidapi.com/search",
    //     params: {
    //       query: `${job_title} ${company} in ${city}, ${province}`,
    //       page: "1",
    //       date_posted: "all",
    //     },
    //     headers: {
    //       "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
    //       "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    //     }};

    //     return axios.request(options)
    //       .then(response => {
    //         return response.data;
    //       })
    //       .catch(error => {
    //         throw error;
    //     });
    //   })
    
    const data = await getPref(1)
    console.log(data);
    // .then((res) => (console.log(res.job_title)));
    // console.log(getPref(1));

    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: `${data.job_title} in toronto, canada`,
        page: "1",
        date_posted: "all",
        country: "CA",
      },
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };
    return axios.request(options)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

module.exports = {fetchData};