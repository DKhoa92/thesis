'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class answer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    }
    answer.init({
        content: DataTypes.STRING,
        mediaLinks: DataTypes.STRING,
        isCorrect: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'answer',
    });
    return answer;
};