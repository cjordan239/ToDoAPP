const db = require("../connection");

const getUserFromDb = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM user", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const insertUserIntoDb = (username, password, email) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO user (username, password, email) VALUES (?,?,?)",
      [username, password, email],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports = { getUserFromDb, insertUserIntoDb };
