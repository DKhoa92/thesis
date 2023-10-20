CREATE USER 'development01'@'%' IDENTIFIED BY 'development01';
CREATE DATABASE online_exam CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
GRANT ALL PRIVILEGES ON online_exam.* TO 'development01'@'%';
FLUSH PRIVILEGES;
