const createError = require('http-errors');

function validate(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const firstIssue = result.error.issues[0];
            return next(createError(400, firstIssue ? firstIssue.message : 'Invalid request payload'));
        }

        req.body = result.data;
        return next();
    };
}

module.exports = validate;