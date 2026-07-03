const HttpEError = require('http-errors');

function validate(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return next(new HttpEError(400, error.details[0].message));
        }
        next();
    };
}


module.exports = validate;