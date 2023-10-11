import express from "express";

const router = express.Router();
import srv from "../../services/authService";
import InputInvalidError from "../../errors/inputInvalid";
import authMiddleware from "../../middlewares/authMiddleware";
import {findByEmail} from "../../services/userService";

router.post('/login', async (req, res, next) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        if (!email || !password) throw new InputInvalidError('Please input email, password', 'LOGIN_FAIL', null);
        let data = await srv.handleLogin(email, password);
        return res.status(200).json(data);
    } catch (err) {
        next(err);
    }
});

/** Trả về thông tin user hiện tại */
router.get('/info', authMiddleware, async (req, res, next) => {
    try {
        const email = req.auth?.email;
        const user = await findByEmail(email);
        return res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router;