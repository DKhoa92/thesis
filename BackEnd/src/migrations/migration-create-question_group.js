'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('question_groups', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            creatorId: {
                type: Sequelize.INTEGER
            },
            questionSubmissionId: {
                type: Sequelize.INTEGER
            },
            approvedDate: {
                type: Sequelize.DATE
            },
            status: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('question_groups');
    }
};