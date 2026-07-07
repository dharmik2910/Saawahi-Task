const createError = require('http-errors');

function validate(schema) {
    return (req, res, next) => {
        if (req.body == null || typeof req.body !== 'object' || Array.isArray(req.body)) {
            return next(
                createError(
                    400,
                    'Invalid input: request body must be a JSON object. Ensure Content-Type is application/json.'
                )
            );
        }

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