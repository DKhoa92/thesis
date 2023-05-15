import axios from "../axios";

const getQuestions = (ids) => {
    return axios.get(`/api/get-questions?id=${ids}`);
}

const createQuestionService = (questionData) => {
    console.log(questionData);
    return axios.post('api/create-question', questionData);
}

const editQuestionService = (questionData) => {
    return axios.post('api/edit-question', questionData);
}

const deleteQuestionService = (questionId) => {
    return axios.delete('api/delete-question', {
        data: { id: questionId }
    });
}

export {
    getQuestions,
    createQuestionService,
    editQuestionService,
    deleteQuestionService
}