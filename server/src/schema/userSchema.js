const Joi = require('joi')


const userSignUpSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
})

const userSignInSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required()
})

module.exports = { userSignUpSchema, userSignInSchema}