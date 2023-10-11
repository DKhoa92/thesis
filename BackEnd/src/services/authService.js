import db from "../models/index";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import {Op} from "sequelize";
import InputInvalidError from "../errors/inputInvalid";

let handleLogin = async (userName, password) => {
    let user = await checkUserName(userName);
    if (user) {
        let match = await compareUserPassword(password, user.password);
        if (match) {
            delete user.password;
        } else {
            throw new InputInvalidError("Wrong password!", 'LOGIN_FAIL', null);
        }
    } else {
        throw new InputInvalidError("Wrong email!", 'LOGIN_FAIL', null);
    }

    /** Tạo JWT token */
    const token = await genJwtToken(user.userName, user.firstName, user.lastName, user.email, user.role);

    return {
        token
    };
}

let checkUserName = (userName) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.user.findOne({
                where: {userName: userName},
            });
            if (user)
                resolve(user);
            else
                resolve(false);
        } catch (error) {
            reject(error);
        }
    })
}

let compareUserPassword = (password, hashpassword) => {
    return new Promise(async (resolve, reject) => {
        try {
            let match = await bcrypt.compare(password, hashpassword);
            resolve(match);
        } catch (error) {
            reject(error);
        }
    })
}

const genJwtToken = async (userName, firstName, lastName, email, role) => {
    return await jwt.sign({
        sub: userName,
        firstName,
        lastName,
        email,
        role
    }, process.env.JWT_SECRET_KEY, {
        algorithm: 'HS256',
        expiresIn: `${process.env.JWT_EXPIRE_TIME_IN_SECONDS}s`
    });
}

const getAuthInfoFromJwtToken = (token) => {
    const { sub, email, firstName, lastName, role } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return {
        userName: sub,
        email,
        firstName,
        lastName,
        role
    }
}

module.exports = {
    handleLogin,
    getAuthInfoFromJwtToken
}