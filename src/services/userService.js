import db from "../models/index";
import bcrypt from 'bcrypt';

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let user = await checkUserEmail(email);
            if (user) {
                let match = await compareUserPassword(password, user.password);
                if (match) {
                    userData.errCode = 0;
                    userData.errMessage = "Login successfully";
                    delete user.password;
                    userData.user = user;
                } else {
                    userData.errCode = 1;
                    userData.errMessage = "Wrong password!";
                }
            }
            else {
                userData.errCode = 1;
                userData.errMessage = "Wrong email!"
            }
            resolve(userData);
        } catch (error) {
            reject(error);
        }
    })
}

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.user.findOne({
                attributes: ['email', 'roleId', 'password'],
                where: { email: email },
                raw: true,
            });
            if (user)
                resolve(user);
            else
                resolve(false);
        } catch (error) {
            reject(error);
        }
    })
}

let compareUserPassword = (password, hashpassword) => {
    return new Promise(async (resolve, reject) => {
        try {
            let match = await bcrypt.compare(password, hashpassword);
            resolve(match);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    handleUserLogin,
}