import db from "../models/index";
import { Op } from "sequelize";

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

let createQuestion = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data);
            let res = {};
            await db.question.create({
                questionData: data.questionData,
                correctAnswer: data.correctAnswer,
                type: data.type,
                subject: data.subject,
                grade: data.grade,
                difficulty: data.difficulty,
            })
            res.errCode = 0;
            res.errMessage = "Create question successfully";
            resolve(res);
        } catch (e) {
            console.log(e);
            reject(e);
        }
    })
}

let editUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let success = await db.user.update({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                address: data.address,
                gender: data.gender,
                roleId: data.roleId,
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

module.exports = {
    getUsers,
    createQuestion,
    editUser,
    deleteUser
}