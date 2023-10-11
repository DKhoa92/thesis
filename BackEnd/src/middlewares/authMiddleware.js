const UnauthorizedError = require("../errors/unauthorizedError");
const { getAuthInfoFromJwtToken } = require("../services/authService");

const middleware = (req, res, next) => {
    /** Verify JWT token */
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        next(new UnauthorizedError('No credentials sent.'));
    } else {
        try {
            // Gán thông tin user được parse từ token để có thấy lấy được từ bên trong controller
            req.auth = getAuthInfoFromJwtToken(token);
            next()
        } catch (err) {
            next(new UnauthorizedError(`Token is invalid.`));
        }
    }
};

module.exports = middleware