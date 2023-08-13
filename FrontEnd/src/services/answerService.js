import axios from "../axios";

// const getQuestionsService = (ids) => {
//     return axios.get(`/api/get-questions?id=${ids}&hasAnswer=true`);
// }

// const getQuestionsWithoutAnswer = (ids) => {
//     return axios.get(`/api/get-questions?id=${ids}`);
// }

const createAnswersService = (answers) => {
    return axios.post('api/create-answers', answers);
}

// const editQuestionService = (questionData) => {
//     return axios.post('api/edit-question', questionData);
// }

// const deleteQuestionService = (questionId) => {
//     return axios.delete('api/delete-question', {
//         data: { id: questionId }
//     });
// }

export {
    // getQuestionsService,
    createAnswersService,
    // editQuestionService,
    // deleteQuestionService
}