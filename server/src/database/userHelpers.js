const pool = require("./connect");

const getUserByEmail = function (inputEmail) {
  const sql = "SELECT * FROM users WHERE email= $1 ";

  return pool.query(sql, [inputEmail]).then((res) => {
    return res.rows;
  });
};

module.exports = { getUserByEmail };