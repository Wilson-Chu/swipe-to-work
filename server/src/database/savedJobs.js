const pool = require("./connect");

const getSavedJobs = function () {
  const sql = "SELECT * FROM saved_jobs ORDER BY id DESC";

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

const updateSavedJobMarker = function (id, updatedJobMarkerData) {
  const { applied } = updatedJobMarkerData;

  const sql = `
    UPDATE saved_jobs
    SET applied = $1
    WHERE id = $2
    RETURNING *
  `;

  return pool.query(sql, [applied, id])
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

module.exports = { getSavedJobs, addSavedJob, updateSavedJobMarker, deleteSavedJob };