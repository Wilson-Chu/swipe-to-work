const axios = require("axios");
const { getPref } = require("../database/prefHelpers");

const fetchData = async function() {
  try {
    const data = await getPref(2); // 2 is a sample userID
    console.log(data);

    let {
      id,
      job_title,
      company,
      city,
      province,
      min_salary,
      job_type,
      is_remote,
      no_experience_required,
      min_education_level,
      user_id,
    } = data;

    // Set default values if the variables are undefined
    job_title = job_title || 'Web developer';
    city = city ? `in ${city}` : 'in Toronto';
    province = province || 'ON';
    is_remote = is_remote ? "remote" : "";
    no_experience_required = no_experience_required ? 'no_experience' : 'more_than_3_years_experience';
    min_salary = min_salary ? `minimum salary of ${min_salary}` : null;
    min_education_level = min_education_level ? `${min_education_level} required` : null;

    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: `${job_type} ${is_remote} ${job_title} ${city} ${province}`,
        page: "1",
        num_pages: "1",
        date_posted: "all",
        country: "CA",
        employment_types: `${job_type}`
      },
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { fetchData };