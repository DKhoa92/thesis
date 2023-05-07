'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Answer', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            userId: {
                type: Sequelize.STRING
            },
            examId: {
                type: Sequelize.STRING
            },
            answerContent: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Answer');
    }
};