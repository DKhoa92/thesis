import questionService from "../services/questionService";
import {ne} from "@faker-js/faker";

let handleGetQuestions = async (req, res, next) => {
    let response;
    let id = req.query.id != 'undefined' ? [req.query.id] : null;
    if (req.query.hasAnswer)
        response = await questionService.getQuestions(id);
    else
        response = await questionService.getQuestionsWithoutAnswer(id);

    return res.status(200).json(response);
}

let handleCreateQuestion = async (req, res) => {
    let response = await questionService.createQuestion(req.body);
    return res.status(200).json(response);
}

let handleEditQuestion = async (req, res) => {
    let response = await questionService.editQuestion(req.body);
    return res.status(200).json(response)
}

let handleDeleteQuestion = async (req, res) => {
    let response = await questionService.deleteQuestion(req.body.id);
    return res.status(200).json(response)
}

module.exports = {
    handleGetQuestions,
    handleCreateQuestion,
    handleEditQuestion,
    handleDeleteQuestion,
}