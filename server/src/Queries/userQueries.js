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

const signUpQueries = (username, password, email) => {
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

const signInQueries= (username, password) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT username, password from user where username = ? and password = ?",
      [username, password],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.length > 0);
        }
      }
    );
  });
};

module.exports = { getUserFromDb, signUpQueries, signInQueries };
