'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class question_using extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    question_using.init({
        questionPackageId: DataTypes.STRING,
        questionId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'question_using',
    });
    return question_using;
};