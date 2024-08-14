const db = require('../connection')

const  findUsername = (username) => {

    const query = " SELECT * FROM user WHERE username "
    db.query(query, [username])
}