'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('questions', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            questionData: {
                type: Sequelize.JSON
            },
            correctAnswer: {
                type: Sequelize.JSON
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
            difficulty: {
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
        await queryInterface.dropTable('questions');
    }
};