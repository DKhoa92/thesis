import bcrypt from 'bcrypt';
import db from '../models/index';

let createNewUser = async (data = true) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data.password);
            let hashPassword = await hashUserPassword(data.password);
            await db.user.create({
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
    createNewUser,
    getAllUser,
    getUserInfoById
}