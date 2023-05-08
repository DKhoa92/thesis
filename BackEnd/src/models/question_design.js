'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class question_design extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    question_design.init({
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        duration: DataTypes.STRING,
        grade: DataTypes.STRING,
        subject: DataTypes.STRING,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'question_design',
    });
    return question_design;
};