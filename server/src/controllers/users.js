const { SignUpQueries, getUserFromDb, SignInQueries } = require("../Queries/userQueries");

const getUser = async (req, res) => {
  try {
    const users = await getUserFromDb();
    res.send(users);
  } catch (err) {
    res.status(500).send("an error fker");
  }
};

const signUpUser = async (req, res) => {
  try {
    const { username, password, email} = req.body;

    if (!username || !password || !email) {
      return res.status(400).send("fill out the form");
    }
    const data = await SignUpQueries(username, password, email);
    res.status(201).json({ message: "user created", data });
  } catch (err) {
    res.status(500).send("error");
  }
};

const signInUser = async (req, res) => {
  try{
    const {username, password} = req.body;

    if (!username || !password) {
      return res.status(400).send("fill the form");
    }
    const isValidUser = await signInQueries(username, password);
    if(isValidUser) {
      return res.status(200).send("succed login")
    } else {
      return res.send("invalid credential")
    }
  } catch (err) {
    console.error("Error:", err); // Debugging line
    res.status(500).send("Error: " + err.message);
  }
};



module.exports = { getUser, signUpUser, signInUser };
