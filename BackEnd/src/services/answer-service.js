import db, { sequelize } from "../models/index";
import { Op } from "sequelize";

let getMany = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let items;
            if (id) {
                items = await db.answer.findAll({
                    where: { id: { [Op.or]: id } },
                })
            } else
                items = await db.question.findAll();
            if (items) {
                res.errCode = 0;
                res.errMessage = "Get answers sucessfully";
                res.data = items;
            } else {
                res.errCode = 1;
                res.errMessage = "Error while get answers on server";
            }
            resolve(res);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

let createMany = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let answersToInsert = [];
            let listQuestionIds = data.map(answer => answer.questionId);
            let correctAnswers = await db.question.findAll({
                where: { id: listQuestionIds },
                attributes: ['id', 'correctAnswer']
            })
            for (let i = 0; i < data.length; i++) {
                let answer = data[i];
                let correctAnswer = correctAnswers.find(correctAnswer => correctAnswer.id === answer.questionId);
                correctAnswer = JSON.parse(correctAnswer.correctAnswer).data;

                let newAnswer = {
                    examParticipationId: answer.examParticipationId ? answer.examParticipationId : '',
                    questionId: answer.questionId,
                    answer: answer.answer,
                    isCorrect: JSON.stringify(correctAnswer) === JSON.stringify(answer.answer)
                }
                answersToInsert.push(newAnswer)
            }
            let res = {};
            await db.exam_answer.bulkCreate(answersToInsert);
            res.errCode = 0;
            res.errMessage = "Create answers successfully";
            resolve(res);
        } catch (e) {
            console.log(e);
            reject(e);
        }
    })
}

let edit = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let correctAnswer = await db.question.findOne({
                where: { questionId: data.questionId }
            })
            let success = await db.answer.update({
                examParticipationId: data.examParticipationId,
                questionId: data.questionId,
                answer: data.answer,
                isCorrect: correctAnswer === data.answer
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

let remove = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let success = await db.answer.destroy({
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
    getMany,
    createMany,
    edit,
    remove,
}