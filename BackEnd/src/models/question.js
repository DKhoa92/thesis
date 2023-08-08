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
            question.hasMany(models.question_using, { foreignKey: 'questionGroupId' });
        }
    }
    question.init({
        data: DataTypes.JSON,
        correctAnswer: DataTypes.JSON,
        type: DataTypes.STRING,
        subject: DataTypes.STRING,
        grade: DataTypes.STRING,
        score: DataTypes.INTEGER,
        difficulty: DataTypes.STRING,
        media: DataTypes.BLOB,
        creatorId: DataTypes.INTEGER,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'question',
    });
    return question;
};