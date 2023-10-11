'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('all_codes', [
            {type: "ROLE", codeKey: "R1", valueEn: "Admin", valueVi: "Admin", createdAt: new Date(), updatedAt: new Date()},
            {type: "ROLE", codeKey: "R2", valueEn: "Principle", valueVi: "Hiệu trưởng", createdAt: new Date(), updatedAt: new Date()},
            {type: "ROLE", codeKey: "R3", valueEn: "Vice Principle", valueVi: "Phó hiệu trưởng", createdAt: new Date(), updatedAt: new Date()},
            {type: "ROLE", codeKey: "R4", valueEn: "Teacher", valueVi: "Giáo viên", createdAt: new Date(), updatedAt: new Date()},
            {type: "ROLE", codeKey: "R5", valueEn: "Student", valueVi: "Học sinh", createdAt: new Date(), updatedAt: new Date()},
            {type: "STATUS", codeKey: "S1", valueEn: "Unsubmit", valueVi: "Chưa gửi", createdAt: new Date(), updatedAt: new Date()},
            {type: "STATUS", codeKey: "S2", valueEn: "Submitted", valueVi: "Đã gửi", createdAt: new Date(), updatedAt: new Date()},
            {type: "STATUS", codeKey: "S3", valueEn: "Approved", valueVi: "Đã duyệt", createdAt: new Date(), updatedAt: new Date()},
            {type: "STATUS", codeKey: "S4", valueEn: "Closed", valueVi: "Đóng", createdAt: new Date(), updatedAt: new Date()},
            {type: "STATUS", codeKey: "S5", valueEn: "Open", valueVi: "Mở", createdAt: new Date(), updatedAt: new Date()},
            {type: "STATUS", codeKey: "S6", valueEn: "Available", valueVi: "Có thể dùng", createdAt: new Date(), updatedAt: new Date()},
            {type: "STATUS", codeKey: "S7", valueEn: "Outdated", valueVi: "Cần cập nhật", createdAt: new Date(), updatedAt: new Date()},
            {type: "STATUS", codeKey: "S8", valueEn: "Updated", valueVi: "Đã cập nhật", createdAt: new Date(), updatedAt: new Date()},
            {type: "GENDER", codeKey: "G1", valueEn: "Male", valueVi: "Nam", createdAt: new Date(), updatedAt: new Date()},
            {type: "GENDER", codeKey: "G2", valueEn: "Female", valueVi: "Nữ", createdAt: new Date(), updatedAt: new Date()},
            {type: "GENDER", codeKey: "G3", valueEn: "Others", valueVi: "Khác", createdAt: new Date(), updatedAt: new Date()},
            {type: "TYPE", codeKey: "T1", valueEn: "Multiple Choice", valueVi: "Trắc nghiệm", createdAt: new Date(), updatedAt: new Date()},
            {type: "SUBJECT", codeKey: "SU1", valueEn: "Math", valueVi: "Toán học", createdAt: new Date(), updatedAt: new Date()},
            {type: "SUBJECT", codeKey: "SU2", valueEn: "Literature", valueVi: "Ngữ văn", createdAt: new Date(), updatedAt: new Date()},
            {type: "SUBJECT", codeKey: "SU3", valueEn: "English", valueVi: "Anh văn", createdAt: new Date(), updatedAt: new Date()},
            {type: "SUBJECT", codeKey: "SU4", valueEn: "Biology", valueVi: "Sinh học", createdAt: new Date(), updatedAt: new Date()},
            {type: "SUBJECT", codeKey: "SU5", valueEn: "Geography", valueVi: "Địa lý", createdAt: new Date(), updatedAt: new Date()},
            {type: "SUBJECT", codeKey: "SU6", valueEn: "History", valueVi: "Lịch sử", createdAt: new Date(), updatedAt: new Date()},
            {type: "SUBJECT", codeKey: "SU7", valueEn: "Ethics", valueVi: "GDCD", createdAt: new Date(), updatedAt: new Date()},
            {type: "SUBJECT", codeKey: "SU8", valueEn: "Ìnormatics", valueVi: "Tin học", createdAt: new Date(), updatedAt: new Date()},
            {type: "SUBJECT", codeKey: "SU9", valueEn: "Chemistry", valueVi: "Hóa học", createdAt: new Date(), updatedAt: new Date()},
            {type: "SUBJECT", codeKey: "SU10", valueEn: "Physics", valueVi: "Vật lý", createdAt: new Date(), updatedAt: new Date()},
            {type: "GRADE", codeKey: "GR1", valueEn: "Grade 1", valueVi: "Lớp 1", createdAt: new Date(), updatedAt: new Date()},
            {type: "GRADE", codeKey: "GR2", valueEn: "Grade 2", valueVi: "Lớp 2", createdAt: new Date(), updatedAt: new Date()},
            {type: "GRADE", codeKey: "GR3", valueEn: "Grade 3", valueVi: "Lớp 3", createdAt: new Date(), updatedAt: new Date()},
            {type: "GRADE", codeKey: "GR4", valueEn: "Grade 4", valueVi: "Lớp 4", createdAt: new Date(), updatedAt: new Date()},
            {type: "GRADE", codeKey: "GR5", valueEn: "Grade 5", valueVi: "Lớp 5", createdAt: new Date(), updatedAt: new Date()},
            {type: "GRADE", codeKey: "GR6", valueEn: "Grade 6", valueVi: "Lớp 6", createdAt: new Date(), updatedAt: new Date()},
            {type: "GRADE", codeKey: "GR7", valueEn: "Grade 7", valueVi: "Lớp 7", createdAt: new Date(), updatedAt: new Date()},
            {type: "GRADE", codeKey: "GR8", valueEn: "Grade 8", valueVi: "Lớp 8", createdAt: new Date(), updatedAt: new Date()},
            {type: "GRADE", codeKey: "GR9", valueEn: "Grade 9", valueVi: "Lớp 9", createdAt: new Date(), updatedAt: new Date()},
            {type: "GRADE", codeKey: "GR10", valueEn: "Grade 10", valueVi: "Lớp 10", createdAt: new Date(), updatedAt: new Date()},
            {type: "GRADE", codeKey: "GR11", valueEn: "Grade 11", valueVi: "Lớp 11", createdAt: new Date(), updatedAt: new Date()},
            {type: "GRADE", codeKey: "GR12", valueEn: "Grade 12", valueVi: "Lớp 12", createdAt: new Date(), updatedAt: new Date()},
            {type: "DIFFICULTY", codeKey: "D1", valueEn: "Remember", valueVi: "Nhận biết", createdAt: new Date(), updatedAt: new Date()},
            {type: "DIFFICULTY", codeKey: "D2", valueEn: "Understand", valueVi: "Thông hiểu", createdAt: new Date(), updatedAt: new Date()},
            {type: "DIFFICULTY", codeKey: "D3", valueEn: "Apply", valueVi: "Vận dụng", createdAt: new Date(), updatedAt: new Date()},
        ], {});
    },

    async down(queryInterface, Sequelize) {
         await queryInterface.bulkDelete('all_codes', null, {});
    }
};
