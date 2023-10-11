// 'use strict';
const bcrypt = require('bcrypt');
const faker = require('@faker-js/faker').fakerVI;
faker.seed(parseInt(process.env.FAKER_SEED_NUMBER));
const NUMER_OF_TEACHER_USERS_FAKE_GENERATE = 10
const NUMER_OF_STUDENT_USERS_FAKE_GENERATE = 100

/**
 * Tạo data giả cho bảng user
 * username và password được đặt như nhau
 * */

async function fakeUserInfo(username, roleCodeKey) {
    const person = faker.person;
    const location = faker.location;
    const password = await bcrypt.hash(username, parseInt(process.env.BCRYPT_PASSWORD_SALT_ROUNDS));
    return {
        userName: username,
        password: password,
        email: `${username}@example.com`,
        role: roleCodeKey,
        firstName: person.firstName(),
        lastName: person.lastName(),
        gender: person.sex() === 'male' ? 'G1' : 'G2',
        phoneNumber: faker.phone.number(),
        address: `${location.streetAddress()}, ${location.city()}`,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /** Admin, Hiệu trưởng, Phó Hiệu trưởng */
        const specials = await Promise.all(['R1', 'R2', 'R3'].map(roleCodeKey => {
            const username = (() => {
                switch (roleCodeKey) {
                    case 'R1':
                        return 'admin';
                    case 'R2':
                        return 'principle';
                    case 'R3':
                        return 'vice_principle';
                    default:
                        return null;
                }
            })();
            return fakeUserInfo(username, roleCodeKey)
        }));

        /** Giáo viên */
        const teachers = await Promise.all(Array.from({length: NUMER_OF_TEACHER_USERS_FAKE_GENERATE}, async (_, i) => await fakeUserInfo(`teacher${i + 1}`, 'R4')));

        /** Học sinh */
        const students = await Promise.all(Array.from({length: NUMER_OF_STUDENT_USERS_FAKE_GENERATE}, async (_, i) => await fakeUserInfo(`stud${i + 1}`, 'R5')));

        /** Insert vào database */
        await queryInterface.bulkInsert('users', [...specials, ...teachers, ...students], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
    }
};
