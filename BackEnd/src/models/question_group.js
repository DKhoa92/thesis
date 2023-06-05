'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class question_group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            question_group.hasMany(models.question_using, { foreignKey: 'questionGroupId' });
            question_group.belongsTo(models.user, { foreignKey: 'creatorId' });
        }
    }
    question_group.init({
        title: DataTypes.STRING,
        creatorId: DataTypes.INTEGER,
        questionSubmissionId: DataTypes.INTEGER,
        approvedDate: DataTypes.DATE,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'question_group',
    });
    return question_group;
};