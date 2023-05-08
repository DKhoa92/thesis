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
        questionContent: DataTypes.TEXT,
        correctAnswer: DataTypes.STRING,
        type: DataTypes.STRING,
        subject: DataTypes.STRING,
        grade: DataTypes.STRING,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'question',
    });
    return question;
};