import db from "../../models/index";
import bcrypt from 'bcrypt';
import { Op } from "sequelize";


const findBy = async (limit = 10, page = 1, keyword, orders) => {
    const users = await db.user.findAll({
        where: {},
        attributes: { exclude: ['password'] },
        limit,
        offset: (page - 1) * limit
    });
    return users;
}

const findByEmail = async (email) => {
    const user = await db.user.findOne({
        where: { email: email },
        attributes: { exclude: ['password'] },
    });
    return user;
}

module.exports = {
    findBy,
    findByEmail
}