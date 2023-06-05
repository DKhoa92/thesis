const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDERS: 'FETCH_GENDER',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',
    FETCH_ROLES: 'FETCH_ROLES',

    FETCH_TYPES_SUCCESS: 'FETCH_TYPES_SUCCESS',
    FETCH_TYPES_FAILED: 'FETCH_TYPES_FAILED',

    FETCH_SUBJECTS_SUCCESS: 'FETCH_SUBJECTS_SUCCESS',
    FETCH_SUBJECTS_FAILED: 'FETCH_SUBJECTS_FAILED',

    FETCH_GRADES_SUCCESS: 'FETCH_GRADES_SUCCESS',
    FETCH_GRADES_FAILED: 'FETCH_GRADES_FAILED',

    FETCH_DIFFICULTIES_SUCCESS: 'FETCH_DIFFICULTIES_SUCCESS',
    FETCH_DIFFICULTIES_FAILED: 'FETCH_DIFFICULTIES_FAILED',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILED: 'CREATE_USER_FAILED',
    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILED: 'DELETE_USER_FAILED',
    FETCH_ALL_USERS_SUCCESS: 'FETCH_ALL_USERS_SUCCESS',
    FETCH_ALL_USERS_FAILED: 'FETCH_ALL_USERS_FAILED',
    CHANGE_EDIT_USER: 'CHANGE_EDIT_USER',
    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILED: 'EDIT_USER_FAILED',

    CREATE_QUESTION_SUCCESS: 'CREATE_QUESTION_SUCCESS',
    CREATE_QUESTION_FAILED: 'CREATE_QUESTION_FAILED',
    DELETE_QUESTION_SUCCESS: 'DELETE_QUESTION_SUCCESS',
    DELETE_QUESTION_FAILED: 'DELETE_QUESTION_FAILED',
    FETCH_ALL_QUESTIONS_SUCCESS: 'FETCH_ALL_QUESTIONS_SUCCESS',
    FETCH_ALL_QUESTIONS_FAILED: 'FETCH_ALL_QUESTIONS_FAILED',
    CHANGE_EDIT_QUESTION: 'CHANGE_EDIT_QUESTION',
    EDIT_QUESTION_SUCCESS: 'EDIT_QUESTION_SUCCESS',
    EDIT_QUESTION_FAILED: 'EDIT_QUESTION_FAILED',

    ADD_QUESTION: 'ADD_QUESTION',
    CHANGE_QUESTION: 'CHANGE_QUESTION',
    SET_QUESTIONS: 'SET_QUESTIONS',
    CREATE_QUESTION_GROUP_SUCCESS: 'CREATE_QUESTION_GROUP_SUCCESS',
    CREATE_QUESTION_GROUP_FAILED: 'CREATE_QUESTION_GROUP_FAILED',
    FETCH_ALL_QUESTION_GROUPS_SUCCESS: 'FETCH_ALL_QUESTION_GROUPS_SUCCESS',
    FETCH_ALL_QUESTION_GROUPS_FAILED: 'FETCH_ALL_QUESTION_GROUPS_FAILED',
    CREATE_QUESTION_USING_SUCCESS: 'CREATE_QUESTION_USING_SUCCESS',
    CREATE_QUESTION_USING_FAILED: 'CREATE_QUESTION_USING_FAILED',
})

export default actionTypes;