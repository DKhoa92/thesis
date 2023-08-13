import db from "../models/index";
import { Op } from "sequelize";

let getQuestions = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let questions;
            if (id) {
                questions = await db.question.findAll({
                    where: { id: { [Op.or]: id } },
                })
            } else
                questions = await db.question.findAll();
            if (questions) {
                res.errCode = 0;
                res.errMessage = "Get questions sucessfully";
                res.data = questions;
            } else {
                res.errCode = 1;
                res.errMessage = "Error while get questions on server";
            }
            resolve(res);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

let getQuestionsWithoutAnswer = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let questions;
            if (id) {
                questions = await db.question.findAll({
                    where: { id: { [Op.or]: id } },
                    attributes: { exclude: ['correctAnswer'] },
                })
            } else
                questions = await db.question.findAll({
                    attributes: { exclude: ['correctAnswer'] },
                });
            if (questions) {
                res.errCode = 0;
                res.errMessage = "Get questions sucessfully";
                res.data = questions;
            } else {
                res.errCode = 1;
                res.errMessage = "Error while get questions on server";
            }
            resolve(res);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

let createQuestion = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            await db.question.create({
                data: data.data,
                correctAnswer: data.correctAnswer,
                type: data.type,
                subject: data.subject,
                grade: data.grade,
                difficulty: data.difficulty,
                score: data.score,
                media: data.media,
                creatorId: data.creatorId
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

let editQuestion = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let success = await db.question.update({
                data: data.data,
                correctAnswer: data.correctAnswer,
                type: data.type,
                subject: data.subject,
                grade: data.grade,
                difficulty: data.difficulty,
                score: data.score,
                media: data.media,
                creatorId: data.creatorId
            }, {
                where: { id: data.id }
            })
            if (success) {
                res.errCode = 0;
                res.errMessage = "Edited question successfully";
            } else {
                res.errCode = 1;
                res.errMessage = "Failed to edit the question from server";
            }
            resolve(res);
        } catch (e) {
            reject(e);
        }
    })
}

let deleteQuestion = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let success = await db.question.destroy({
                where: { id: id },
            });

            if (success) {
                res.errCode = 0;
                res.errMessage = "Deleted the question successfully";
            } else {
                res.errCode = 1;
                res.errMessage = "Failed to delete the question from server";
            }
            resolve(res);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getQuestions,
    getQuestionsWithoutAnswer,
    createQuestion,
    editQuestion,
    deleteQuestion,
}