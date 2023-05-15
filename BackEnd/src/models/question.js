'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class question extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    question.init({
        questionData: DataTypes.JSON,
        correctAnswer: DataTypes.JSON,
        type: DataTypes.STRING,
        subject: DataTypes.STRING,
        grade: DataTypes.STRING,
        difficulty: DataTypes.STRING,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'question',
    });
    return question;
};