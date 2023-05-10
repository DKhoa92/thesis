'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class exam extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    exam.init({
        semesterId: DataTypes.STRING,
        questionPackageId: DataTypes.STRING,
        date: DataTypes.DATE,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'exam',
    });
    return exam;
};