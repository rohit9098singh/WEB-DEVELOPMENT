// middleware/productValidationMiddleware.js
const joi = require('joi');

const validateProduct = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required().messages({
            'string.base': '"name" should be a type of "text"',
            'string.empty': '"name" cannot be an empty field',
            'string.min': '"name" should have at least {#limit} characters',
            'any.required': '"name" is a required field',
        }),
        price: joi.number().positive().required().messages({
            'number.base': '"price" should be a type of "number"',
            'number.positive': '"price" should be a positive number',
            'any.required': '"price" is a required field',
        }),
        description: joi.string().min(10).max(500).required().messages({
            'string.base': '"description" should be a type of "text"',
            'string.empty': '"description" cannot be an empty field',
            'string.min': '"description" should have at least {#limit} characters',
            'any.required': '"description" is a required field',
        }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: 'Bad request',
            error: error.details.map((detail) => detail.message),
        });
    }
    next(); // Validation passed, move to the next middleware or route handler
};

module.exports = validateProduct;
