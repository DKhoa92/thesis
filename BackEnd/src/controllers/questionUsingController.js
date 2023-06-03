import questionUsingService from "../services/questionUsingService";

let handleGetQuestionUsings = async (req, res) => {
    let response;
    let id = req.query.id != 'undefined' ? [req.query.id] : null;
    if (req.query.hasAnswer)
        response = await questionUsingService.getQuestionUsings(id);
    else
        response = await questionUsingService.getQuestionUsingsWithoutAnswer(id);

    return res.status(200).json(response);
}

let handleCreateQuestionUsing = async (req, res) => {
    let response = await questionUsingService.createQuestionUsing(req.body);
    return res.status(200).json(response);
}

let handleEditQuestionUsing = async (req, res) => {
    let response = await questionUsingService.editQuestionUsing(req.body);
    return res.status(200).json(response)
}

let handleDeleteQuestionUsing = async (req, res) => {
    let response = await questionUsingService.deleteQuestionUsing(req.body.id);
    return res.status(200).json(response)
}

module.exports = {
    handleGetQuestionUsings,
    handleCreateQuestionUsing,
    handleEditQuestionUsing,
    handleDeleteQuestionUsing,
}