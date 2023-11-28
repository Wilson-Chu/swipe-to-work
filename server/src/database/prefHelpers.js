const pool = require("./connect");

const updatePref = function (
  {
    jobTitle,
    company,
    city,
    province,
    minSalary,
    jobType,
    remote,
    experience,
    education,
  },
  userID
) {

  const sql = `
      UPDATE preferences
      SET job_title = $1, company =$2, city = $3, province = $4, min_salary = $5, job_type = $6, is_remote = $7, no_experience_required = $8, min_education_level = $9
      WHERE user_id = $10
      RETURNING *
    `;

  return pool
    .query(sql, [
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
    ])
    .then((data) => {
      return data.rows[0];
    });
};

const getPref = function (userID) {
  const sql = "SELECT * FROM preferences WHERE user_id =$1";

  return pool.query(sql, [userID]).then((res) => {
    console.log(res.rows);
    return res.rows[0];
  });
};

module.exports = { updatePref, getPref };
