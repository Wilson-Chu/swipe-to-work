const pool = require("./connect");

const getUserIdByEmail = function (inputEmail) {
  const sql = "SELECT id FROM users WHERE email= $1 ";

  return pool.query(sql, [inputEmail]).then((res) => {
    return res.rows;
  });
};

module.exports = { getUserIdByEmail };