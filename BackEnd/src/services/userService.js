import db from "../models/index";
import bcrypt from 'bcrypt';
import { Op } from "sequelize";

let handleUserLogin = (userName, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let user = await checkUserName(userName);
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

let checkUserName = (userName) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.user.findOne({
                where: { userName: userName },
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
            let res = {};
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
            if (users) {
                res.errCode = 0;
                res.errMessage = "Get users sucessfully";
                res.data = users;
            } else {
                res.errCode = 1;
                res.errMessage = "Error while get users on server";
            }
            resolve(res);
        } catch (error) {
            reject(error);
        }
    })
}

let getUsersByEmail = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let email = data.email;
            let res = {};
            let user;
            if (email) {
                user = await db.user.findOne({
                    where: { email: email },
                    attributes: { exclude: ['password'] },
                })
            };
            if (user) {
                res.errCode = 0;
                res.errMessage = "Get user sucessfully";
                res.data = user;
            } else {
                res.errCode = 1;
                res.errMessage = "Error while get user on server";
            }
            resolve(res);
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
            let hashPassword = data.password && await hashUserPassword(data.password);
            await db.user.create({
                userName: data.userName,
                password: hashPassword,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender || 'G1',
                role: data.role || 'R5',
            })
            res.errCode = 0;
            res.errMessage = "Create user successfully";
            resolve(res);
        } catch (e) {
            reject(e);
        }
    })
}

let editUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let success = await db.user.update({
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender,
                role: data.role,
            }, {
                where: { id: data.id }
            })
            if (success) {
                res.errCode = 0;
                res.errMessage = "Edited user successfully";
            } else {
                res.errCode = 1;
                res.errMessage = "Failed to edit the user from server";
            }
            resolve(res);
        } catch (e) {
            reject(e);
        }
    })
}

let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let success = await db.user.destroy({
                where: { id: id },
            });

            if (success) {
                res.errCode = 0;
                res.errMessage = "Deleted the user successfully";
            } else {
                res.errCode = 1;
                res.errMessage = "Failed to delete the user from server";
            }
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
    getUsersByEmail,
    getAllCode,
    createUser,
    editUser,
    deleteUser
}