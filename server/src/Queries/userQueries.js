const db = require('../connection')

const getAllUser = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM user", (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const postUser = () => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO user (username, password) VALUE (?,?)", (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = {getAllUser, postUser}