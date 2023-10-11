const InputInvalidError = require("../errors/inputInvalid");
const UnauthorizedError = require("../errors/unauthorizedError");

const middleware = (err, req, res, next) => {
    console.error(err.stack);

    if (err instanceof InputInvalidError) {
        return res.status(400).json({
            code: err.code,
            message: err.message,
            data: err.data
        });
    } else if (err instanceof UnauthorizedError) {
        return res.status(401).json({
            code: 'UNAUTHORIZED',
            message: err.message
        });
    }
}

module.exports = middleware