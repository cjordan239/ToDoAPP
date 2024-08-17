const express = require("express");
const { postUser, getUser} = require("../controllers/users");
const { userSignUpSchema } = require("../schema/userSchema");
const router = express.Router();


router.get('/getUser', getUser )

router.post('/signup', (req, res)=> {
    const {error} = userSignUpSchema.validate(req.body)
    
    if (error) {
        return res.status(400).json({message: error.details})
    }

    postUser(req,res)
});

module.exports = router;
