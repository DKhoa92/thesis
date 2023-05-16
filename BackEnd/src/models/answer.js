'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class exam_answer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    exam_answer.init({
        examParticipationId: DataTypes.INTEGER,
        questionId: DataTypes.INTEGER,
        answer: DataTypes.JSON,
        isCorrect: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'exam_answer',
    });
    return exam_answer;
};