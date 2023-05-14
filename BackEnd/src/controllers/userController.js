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

let handleGetUsers = async (req, res) => {
    let id = req.query.id != 'undefined' ? [req.query.id] : null; // ALL, id
    let users = await userService.getUsers(id);

    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users,
    })
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

module.exports = {
    handleLogin,
    handleGetUsers,
    handleGetAllCode,
    handleCreateUser,
}