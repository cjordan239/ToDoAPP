const db = require("../connection");

const getUserFromDb = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM user";

    db.query(query, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};


const signUpQueries = (username, password, email) => {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO user (username, password, email) 
      VALUES (?, ?, ?)
    `;

    db.query(query, [username, password, email], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

const signInQueries = (username, password) => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT id, username, password 
      FROM user 
      WHERE username = ? AND password = ?
    `;

    db.query(query, [username, password], (err, result) => {
      if (err) {
        return reject(err);
      }

      if (result.length > 0) {
        return resolve(result[0]);
      } else {
        return resolve(null);
      }
    });
  });
};

module.exports = { getUserFromDb, signUpQueries, signInQueries };
