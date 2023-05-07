'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('all_code', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            valueEn: {
                type: Sequelize.STRING
            },
            valueVn: {
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
        await queryInterface.dropTable('all_code');
    }
};