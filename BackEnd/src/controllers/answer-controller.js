import answerService from "../services/answer-service";

let handleGetMany = async (req, res) => {
    let response;
    let id = req.query.id != 'undefined' ? [req.query.id] : null;
    response = await answerService.getMany(id);

    return res.status(200).json(response);
}

let handleCreateMany = async (req, res) => {
    let response = await answerService.createMany(req.body);
    return res.status(200).json(response);
}

let handleEdit = async (req, res) => {
    let response = await answerService.edit(req.body);
    return res.status(200).json(response)
}

let handleDelete = async (req, res) => {
    let response = await answerService.remove(req.body.id);
    return res.status(200).json(response)
}

module.exports = {
    handleGetMany,
    handleCreateMany,
    handleEdit,
    handleDelete,
}