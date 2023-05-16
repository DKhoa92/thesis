'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class class_room extends Model {

    static associate(models) {
      // define association here
    }
  }
  class_room.init({
    name: DataTypes.STRING,
    grade: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'class_room',
  });
  return class_room;
};