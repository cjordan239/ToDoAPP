const db = require("../connection");

const createTodoQueries = (user_id, title, content, category) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO posts (user_id, title, content, category) VALUES (?,?,?)",
      [user_id, title, content, category],
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

module.exports = { createTodoQueries };
