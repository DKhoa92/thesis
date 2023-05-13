'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class class_distribution extends Model {

    static associate(models) {
      // define association here
    }
  }
  class_distribution.init({
    userId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'class_distribution',
  });
  return class_distribution;
};