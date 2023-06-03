import axios from "../axios";

const getQuestionGroupsService = (ids) => {
    return axios.get(`/api/get-question-groups?id=${ids}`);
}

const createQuestionGroupService = (questionGroupData) => {
    return axios.post('api/create-question-group', questionGroupData);
}

const editQuestionGroupService = (questionGroupData) => {
    return axios.post('api/edit-question-group', questionGroupData);
}

const deleteQuestionGroupService = (questionGroupId) => {
    return axios.delete('api/delete-question-group', {
        data: { id: questionGroupId }
    });
}

const getQuestionUsingsService = (ids) => {
    return axios.get(`/api/get-question-usings?id=${ids}`);
}

const createQuestionUsingService = (questionUsingData) => {
    return axios.post('api/create-question-using', questionUsingData);
}

const editQuestionUsingService = (questionUsingData) => {
    return axios.post('api/edit-question-using', questionUsingData);
}

const deleteQuestionUsingService = (questionUsingId) => {
    return axios.delete('api/delete-question-using', {
        data: { id: questionUsingId }
    });
}

export {
    getQuestionGroupsService,
    createQuestionGroupService,
    editQuestionGroupService,
    deleteQuestionGroupService,
    getQuestionUsingsService,
    createQuestionUsingService,
    editQuestionUsingService,
    deleteQuestionUsingService
}