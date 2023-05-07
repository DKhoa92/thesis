'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Semester extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Semester.init({
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Semester',
    });
    return Semester;
};