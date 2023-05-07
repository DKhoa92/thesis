import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => {
    try {
        let data = await db.user.findAll();
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
}

let getCRUD = async (req, res) => {
    // let message = await CRUDService.createNewUser()
    // console.log(message);
    return res.render("crud.ejs");
}

let postCRUD = async (req, res) => {
    let testobj = {
        id: "A1",
        firstName: "nguyen",
        lastName: "Khoa2",
        email: "ndk@yh.com",
        password: "123456",
        address: "data.address",
        gender: 2,
        roleId: "IT",
    }
    let message = await CRUDService.createNewUser(testobj);
    console.log(req.body);
    console.log(message);
    return res.send('POST CRUD from Server');
}

let getDisplayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.send(data);
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    let userData = {};
    if (userId) {
        userData = await CRUDService.getUserInfoById(userId);
    }
    return res.send(userData);
}

let handleLogin = (req, res) => {
    return res.status(200).json({
        message: "hello world",
    })
}

module.exports = {
    getHomePage,
    getCRUD,
    postCRUD,
    getDisplayCRUD,
    getEditCRUD,
    handleLogin,
}