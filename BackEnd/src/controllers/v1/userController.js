import express from "express";

const router = express.Router();
import service from "../../services/v1/userService";

router.get('/', async (req, res, next) => {
    try {
        return res.status(200).json(await service.findBy(5, 1, null, null));
    } catch (err) {
        next(err);
    }
});

// /** Trả về thông tin user hiện tại */
// router.get('/info', async (req, res, next) => {
//     try {
//         const email = req.auth?.email;
//         const user = await findByEmail(email);
//         return res.status(200).json(user);
//     } catch (err) {
//         next(err);
//     }
// });

module.exports = router;