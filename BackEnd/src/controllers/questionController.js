import questionService from "../services/questionService";

// let handleGetUsers = async (req, res) => {
//     let id = req.query.id != 'undefined' ? [req.query.id] : null;
//     let response = await userService.getUsers(id);

//     return res.status(200).json(response);
// }

let handleCreateQuestion = async (req, res) => {
    let response = await questionService.createQuestion(req.body);
    return res.status(200).json(response);
}

// let handleEditUser = async (req, res) => {
//     let response = await userService.editUser(req.body);
//     return res.status(200).json(response)
// }

// let handleDeleteUser = async (req, res) => {
//     let response = await userService.deleteUser(req.body.id);
//     return res.status(200).json(response)
// }

module.exports = {
    // handleGetUsers,
    handleCreateQuestion,
    // handleEditUser,
    // handleDeleteUser,
}