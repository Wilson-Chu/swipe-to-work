const pool = require("./connect");

// module.exports = function(pool) {

const getSavedJobs = function () {
  const sql = "SELECT * FROM saved_jobs ORDER BY id";

  return pool.query(sql)
    .then(res => {
      return res.rows;
    });
};

const addSavedJob = function (
    job_posting_id,
    applied,
    company,
    job_title,
    city,
    province,
    min_salary,
    job_description,
    job_type,
    is_remote,
    posted_at,
    website,
    user_id
) {
  const sql = `INSERT into saved_jobs (
      job_posting_id,
      applied,
      company,
      job_title,
      city,
      province,
      min_salary,
      job_description,
      job_type,
      is_remote,
      posted_at,
      website,
      user_id
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`;

  return pool.query(sql, [
    job_posting_id,
    applied,
    company,
    job_title,
    city,
    province,
    min_salary,
    job_description,
    job_type,
    is_remote,
    posted_at,
    website,
    user_id
  ])
    .then(res => {
      return res.rows[0];
    });
};

const deleteSavedJob = function (id) {
  const sql = 'delete from saved_jobs where id=($1) returning *';

  return pool.query(sql, [id])
    .then(res => {
      return res.rows[0];
    });
};

// return { getSavedJobs, addSavedJob, deleteSavedJob };

// };

module.exports = { getSavedJobs, addSavedJob, deleteSavedJob };