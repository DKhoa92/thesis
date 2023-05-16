'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class exam_template extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    exam_template.init({
        userId: DataTypes.INTEGER,
        questionSubmissionId: DataTypes.INTEGER,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'exam_template',
    });
    return exam_template;
};