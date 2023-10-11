import bcrypt from 'bcrypt';
import db from '../models/index';

let createNewUser = async (data = true) => {
    return new Promise(async (resolve, reject) => {
        try {
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
            resolve("Create user successfully");
        } catch (e) {
            reject(e);
        }
    })
}

let createAllCode = async (data = true) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.all_code.create({
                type: data.type,
                codeKey: data.codeKey,
                valueEn: data.valueEn,
                valueVi: data.valueVi,
            })
            resolve("Create user successfully");
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.user.findAll();
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = db.user.findOne({
                where: { id: userId }
            });
            resolve(user ? user : []);
        } catch (error) {
            reject(error);
        }
    })
}

let hashUserPassword = async (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            bcrypt.hash(password, parseInt(process.env.BCRYPT_PASSWORD_SALT)).then(function (hash) {
                resolve(hash);
            });
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    createNewUser,
    getAllUser,
    getUserInfoById,
    createAllCode
}