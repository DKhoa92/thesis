import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/display-crud', homeController.getDisplayCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/create-allcode', homeController.postAllCode);

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-users', userController.handleGetUsers);
    router.get('/api/allcode', userController.handleGetAllCode);
    router.post('/api/create-user', userController.handleCreateUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);

    return app.use("/", router);
}

module.exports = initWebRoutes;