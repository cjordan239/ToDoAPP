const { insertUserIntoDb, getUserFromDb } = require("../Queries/userQueries");

const getUser = async (req, res) => {
  try {
    const users = await getUserFromDb();
    res.send(users);
  } catch (err) {
    res.status(500).send("an error fker");
  }
};

const postUser = async (req, res) => {
  try {
    const { username, password, email} = req.body;

    if (!username || !password || !email) {
      return res.status(400).send("fill out the form");
    }
    const data = await insertUserIntoDb(username, password, email);
    res.status(201).json({ message: "user created", data });
  } catch (err) {
    res.status(500).send("error");
  }
};

module.exports = { getUser, postUser };
