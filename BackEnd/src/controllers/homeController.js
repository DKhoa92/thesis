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
        userName: "dinhkhoa",
        firstName: "nguyen",
        lastName: "Khoa3",
        email: "ndk@yh.com",
        password: "123456",
        address: "1 Nguyễn Trãi",
        gender: 2,
        roleId: 0,
    }
    let message = await CRUDService.createNewUser(testobj);
    return res.send('POST CRUD from Server');
}

let postAllCode = async (req, res) => {
    let testobj = {
        type: "GRADE",
        codeKey: "GR5",
        valueEn: "Grade 5",
        valueVi: "Lớp 5",
    }
    console.log(testobj);
    let message = await CRUDService.createAllCode(testobj);
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
    postAllCode
}