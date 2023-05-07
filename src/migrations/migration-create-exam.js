'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Exam', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            semesterId: {
                type: Sequelize.STRING
            },
            questionPackageId: {
                type: Sequelize.STRING
            },
            date: {
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
        await queryInterface.dropTable('Exam');
    }
};