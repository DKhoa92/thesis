import questionGroupService from "../services/questionGroupService";

let handleGetQuestionGroups = async (req, res) => {
    let id = req.query.id != 'undefined' ? [req.query.id] : null;
    let response = await questionGroupService.getQuestionGroups(id);

    return res.status(200).json(response);
}

let handleCreateQuestionGroup = async (req, res) => {
    let response = await questionGroupService.createQuestionGroup(req.body);
    return res.status(200).json(response);
}

let handleEditQuestionGroup = async (req, res) => {
    let response = await questionGroupService.editQuestionGroup(req.body);
    return res.status(200).json(response)
}

let handleDeleteQuestionGroup = async (req, res) => {
    let response = await questionGroupService.deleteQuestionGroup(req.body.id);
    return res.status(200).json(response)
}

let handleGetQuestionByGroupId = async (req, res) => {
    let questionGroupId = req.query.id;
    let response = await questionGroupService.getQuestionsByGroupId(questionGroupId);

    return res.status(200).json(response);
}

module.exports = {
    handleGetQuestionGroups,
    handleCreateQuestionGroup,
    handleEditQuestionGroup,
    handleDeleteQuestionGroup,
    handleGetQuestionByGroupId,
}