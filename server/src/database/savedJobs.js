const pool = require("./connect");

// module.exports = function(pool) {

  const getSavedJobs = function() {
    const sql = "select * from saved_jobs order by id desc";

    return pool.query(sql)
      .then(res => {
        return res.rows;
      });
  };

  const addSavedJob = function(job) {
    const sql = 'insert into saved_jobs (job) values ($1) returning *';

    return pool.query(sql, [job])
      .then(res => {
        return res.rows[0];
      });
  };

  const deleteSavedJob = function(id) {
    const sql = 'delete from saved_jobs where id=($1) returning *';

    return pool.query(sql, [id])
      .then(res => {
        return res.rows[0];
      });
  };

  // return { getSavedJobs, addSavedJob, deleteSavedJob };

// };

module.exports = {getSavedJobs, addSavedJob, deleteSavedJob};