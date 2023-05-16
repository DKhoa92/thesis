import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import questionController from "../controllers/questionController";

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
    router.post('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);

    router.post('/api/create-question', questionController.handleCreateQuestion);
    router.get('/api/get-questions', questionController.handleGetQuestions);
    router.post('/api/edit-question', questionController.handleEditQuestion);
    router.delete('/api/delete-question', questionController.handleDeleteQuestion);

    return app.use("/", router);
}

module.exports = initWebRoutes;