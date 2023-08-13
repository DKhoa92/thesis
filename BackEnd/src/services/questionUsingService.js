import db from "../models/index";
import { Op } from "sequelize";

let getQuestionUsings = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let questionUsings;
            if (id) {
                questionUsings = await db.question_using.findAll({
                    where: { id: { [Op.or]: id } },
                })
            } else
                questionUsings = await db.question_using.findAll();
            if (questionUsings) {
                res.errCode = 0;
                res.errMessage = "Get questionUsings sucessfully";
                res.data = questionUsings;
            } else {
                res.errCode = 1;
                res.errMessage = "Error while get questionUsings on server";
            }
            resolve(res);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

let createQuestionUsing = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            let res = {};
            await db.question_using.create({
                questionGroupId: data.questionGroupId,
                questionId: data.questionId,
            })
            res.errCode = 0;
            res.errMessage = "Create questionUsing successfully";
            resolve(res);
        } catch (e) {
            console.log(e);
            reject(e);
        }
    })
}

let editQuestionUsing = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let success = await db.question_using.update({
                questionGroupId: data.questionGroupId,
                questionId: data.questionId,
            }, {
                where: { id: data.id }
            })
            if (success) {
                res.errCode = 0;
                res.errMessage = "Edited questionUsing successfully";
            } else {
                res.errCode = 1;
                res.errMessage = "Failed to edit the questionUsing from server";
            }
            resolve(res);
        } catch (e) {
            reject(e);
        }
    })
}

let deleteQuestionUsing = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let success = await db.question_using.destroy({
                where: { id: id },
            });

            if (success) {
                res.errCode = 0;
                res.errMessage = "Deleted the questionUsing successfully";
            } else {
                res.errCode = 1;
                res.errMessage = "Failed to delete the questionUsing from server";
            }
            resolve(res);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getQuestionUsings,
    createQuestionUsing,
    editQuestionUsing,
    deleteQuestionUsing,
}