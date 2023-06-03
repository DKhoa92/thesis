import db from "../models/index";
import { Op } from "sequelize";

let getQuestionGroups = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let questionGroups;
            if (id) {
                questionGroups = await db.question_group.findAll({
                    where: { id: { [Op.or]: id } },
                })
            } else
                questionGroups = await db.question_groups.findAll();
            if (questionGroups) {
                res.errCode = 0;
                res.errMessage = "Get questionGroups sucessfully";
                res.data = questionGroups;
            } else {
                res.errCode = 1;
                res.errMessage = "Error while get questionGroups on server";
            }
            resolve(res);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

let createQuestionGroup = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let questionGroup = await db.question_group.create({
                name: data.name,
                creatorId: data.creatorId,
            })
            res.questionGroupId = questionGroup.id;
            res.errCode = 0;
            res.errMessage = "Create questionGroup successfully";
            resolve(res);
        } catch (e) {
            console.log(e);
            reject(e);
        }
    })
}

let editQuestionGroup = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let success = await db.question_group.update({
                name: data.name,
                creatorId: data.creatorId,
            }, {
                where: { id: data.id }
            })
            if (success) {
                res.errCode = 0;
                res.errMessage = "Edited questionGroup successfully";
            } else {
                res.errCode = 1;
                res.errMessage = "Failed to edit the questionGroup from server";
            }
            resolve(res);
        } catch (e) {
            reject(e);
        }
    })
}

let deleteQuestionGroup = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let success = await db.question_group.destroy({
                where: { id: id },
            });

            if (success) {
                res.errCode = 0;
                res.errMessage = "Deleted the questionGroup successfully";
            } else {
                res.errCode = 1;
                res.errMessage = "Failed to delete the questionGroup from server";
            }
            resolve(res);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getQuestionGroups,
    createQuestionGroup,
    editQuestionGroup,
    deleteQuestionGroup,
}