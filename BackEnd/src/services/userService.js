import db from "../models/index";
import bcrypt from 'bcrypt';
import { Op } from "sequelize";

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let user = await checkUserEmail(email);
            if (user) {
                let match = await compareUserPassword(password, user.password);
                if (match) {
                    res.errCode = 0;
                    res.errMessage = "Login successfully";
                    delete user.password;
                    res.user = user;
                } else {
                    res.errCode = 1;
                    res.errMessage = "Wrong password!";
                }
            }
            else {
                res.errCode = 1;
                res.errMessage = "Wrong email!"
            }
            resolve(res);
        } catch (error) {
            reject(error);
        }
    })
}

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.user.findOne({
                where: { email: email },
                raw: true,
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

let getUsers = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users;
            if (id) {
                users = await db.user.findAll({
                    where: { id: { [Op.or]: id } },
                    attributes: { exclude: ['password'] },
                })
            } else
                users = await db.user.findAll({
                    attributes: { exclude: ['password'] },
                });
            resolve(users);
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

let getAllCode = (type) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            if (type) {
                let data = await db.all_code.findAll(
                    {
                        where: { type: type },
                        order: [['codeKey', 'ASC']]
                    }
                );
                res.errCode = 0;
                res.errMessage = "Get All Code sucessfully";
                res.data = data;
            } else {
                res.errCode = 1;
                res.errMessage = "Missing parameter!";
            }
            resolve(res);
        } catch (error) {
            reject(error);
        }
    })
}

let createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let hashPassword = await hashUserPassword(data.password);
            await db.user.create({
                userName: data.userName,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: hashPassword,
                address: data.address,
                gender: data.gender,
                roleId: data.roleId,
            })
            res.errCode = 0;
            res.errMessage = "Create user successfully";
            resolve(res);
        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = async (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let saltRounds = 10;
            bcrypt.hash(password, saltRounds).then(function (hash) {
                resolve(hash);
            });
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    handleUserLogin,
    getUsers,
    getAllCode,
    createUser
}