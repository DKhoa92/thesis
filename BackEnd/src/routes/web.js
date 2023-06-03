import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import questionController from "../controllers/questionController";
import questionGroupController from "../controllers/questionGroupController";
import questionUsingController from "../controllers/questionUsingController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/display-crud', homeController.getDisplayCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/create-allcode', homeController.postAllCode);

    router.post('/api/login', userController.handleLogin);
    router.post('/api/google-login', userController.handleGoogleLogin);
    router.get('/api/get-users', userController.handleGetUsers);
    router.get('/api/allcode', userController.handleGetAllCode);
    router.post('/api/create-user', userController.handleCreateUser);
    router.post('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);

    router.post('/api/create-question', questionController.handleCreateQuestion);
    router.get('/api/get-questions', questionController.handleGetQuestions);
    router.post('/api/edit-question', questionController.handleEditQuestion);
    router.delete('/api/delete-question', questionController.handleDeleteQuestion);

    router.post('/api/create-question-group', questionGroupController.handleCreateQuestionGroup);
    router.get('/api/get-question-group', questionGroupController.handleGetQuestionGroups);
    router.post('/api/edit-question-group', questionGroupController.handleEditQuestionGroup);
    router.delete('/api/delete-question-group', questionGroupController.handleDeleteQuestionGroup);

    router.post('/api/create-question-using', questionUsingController.handleCreateQuestionUsing);
    router.get('/api/get-question-using', questionUsingController.handleGetQuestionUsings);
    router.post('/api/edit-question-using', questionUsingController.handleEditQuestionUsing);
    router.delete('/api/delete-question-using', questionUsingController.handleDeleteQuestionUsing);

    return app.use("/", router);
}

module.exports = initWebRoutes;