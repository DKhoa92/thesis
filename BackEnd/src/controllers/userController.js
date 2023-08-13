import userService from "../services/userService";

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: "Please input email, password",
        })
    }

    let userData = await userService.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : '',
    })
}

let handleGoogleLogin = async (req, res) => {
    let email = req.body.email;
    let response = await userService.getUsersByEmail(req.body);
    if (response.errCode != 0)
        response = await userService.createUser(req.body);

    return res.status(200).json(response)
}

let handleGetUsers = async (req, res) => {
    let id = req.query.id != 'undefined' ? [req.query.id] : null;
    let response = await userService.getUsers(id);

    return res.status(200).json(response);
}

let handleGetAllCode = async (req, res) => {
    try {
        let data = await userService.getAllCode(req.query.type);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Error while get allcode from server',
        })
    }
}

let handleCreateUser = async (req, res) => {
    let response = await userService.createUser(req.body);
    return res.status(200).json(response)
}

let handleEditUser = async (req, res) => {
    let response = await userService.editUser(req.body);
    return res.status(200).json(response)
}

let handleDeleteUser = async (req, res) => {
    let response = await userService.deleteUser(req.body.id);
    return res.status(200).json(response)
}

module.exports = {
    handleLogin,
    handleGoogleLogin,
    handleGetUsers,
    handleGetAllCode,
    handleCreateUser,
    handleEditUser,
    handleDeleteUser,
}