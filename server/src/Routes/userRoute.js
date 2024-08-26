const express = require("express");
const { signUpUser, getUser, signInUser} = require("../controllers/users");
const { userSignUpSchema, userSignInSchema } = require("../schema/userSchema");
const router = express.Router();


router.get('/getUser', getUser )

router.post('/signup', (req, res)=> {
    const {error} = userSignUpSchema.validate(req.body)
    
    if (error) {
        return res.status(400).json({message: error.details})
    }

    signUpUser(req,res)
});

router.post('/signin', (req, res) => {
    const {error} = userSignInSchema.validate(req.body)

    if (error){
        return res.status(400).json({message: error.details})
    }

    signInUser(req,res)
})

module.exports = router;
