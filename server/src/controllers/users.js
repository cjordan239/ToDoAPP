const {getAllUser, postUser} = require('../Queries/userQueries')

const getUser = async (req, res) => {
    try{
        const users = await getAllUser();
        res.send(users)
    } catch (err) {
        req.status(500).send("an error fker")
    }
}

const postUser = async (req, res) => {
    try{
        const data = await postUser();
        req.send(data)
    } catch (err) {
        res.status(500).send('error');
    }
}