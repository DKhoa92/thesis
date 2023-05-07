'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Question', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            questionContent: {
                type: Sequelize.TEXT
            },
            correctAnswer: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            subject: {
                type: Sequelize.STRING
            },
            grade: {
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
        await queryInterface.dropTable('Question');
    }
};