-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2023 at 04:13 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_exam`
--

-- --------------------------------------------------------

--
-- Table structure for table `all_codes`
--

CREATE TABLE `all_codes` (
  `id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `codeKey` varchar(255) DEFAULT NULL,
  `valueEn` varchar(255) DEFAULT NULL,
  `valueVi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `all_codes`
--

INSERT INTO `all_codes` (`id`, `type`, `codeKey`, `valueEn`, `valueVi`, `createdAt`, `updatedAt`) VALUES
(1, 'ROLE', 'R1', 'Admin', 'Admin', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'ROLE', 'R2', 'Principle', 'Hiệu trưởng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'ROLE', 'R3', 'Vice Principle', 'Phó hiệu trưởng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'ROLE', 'R4', 'Teacher', 'Giáo viên', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'ROLE', 'R5', 'Student', 'Học sinh', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'STATUS', 'S1', 'Unsubmit', 'Chưa gửi', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'STATUS', 'S2', 'Submitted', 'Đã gửi', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'STATUS', 'S3', 'Approved', 'Đã duyệt', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'STATUS', 'S4', 'Closed', 'Đóng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'STATUS', 'S5', 'Open', 'Mở', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'STATUS', 'S6', 'Available', 'Có thể dùng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'STATUS', 'S7', 'Outdated', 'Cần cập nhật', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'STATUS', 'S8', 'Updated', 'Đã cập nhật', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'GENDER', 'G1', 'Male', 'Nam', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'GENDER', 'G2', 'Female', 'Nữ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'GENDER', 'G3', 'Others', 'Khác', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'TYPE', 'T1', 'Multiple Choice', 'Trắc nghiệm', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'SUBJECT', 'SU1', 'Math', 'Toán học', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'SUBJECT', 'SU2', 'Literature', 'Ngữ văn', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'SUBJECT', 'SU3', 'English', 'Anh văn', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'SUBJECT', 'SU4', 'Biology', 'Sinh học', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'SUBJECT', 'SU5', 'Geography', 'Địa lý', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'SUBJECT', 'SU6', 'History', 'Lịch sử', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'SUBJECT', 'SU7', 'Ethics', 'GDCD', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'SUBJECT', 'SU8', 'Ìnormatics', 'Tin học', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'SUBJECT', 'SU9', 'Chemistry', 'Hóa học', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'SUBJECT', 'SU10', 'Physics', 'Vật lý', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'GRADE', 'GR1', 'Grade 1', 'Lớp 1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'GRADE', 'GR2', 'Grade 2', 'Lớp 2', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'GRADE', 'GR3', 'Grade 3', 'Lớp 3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'GRADE', 'GR4', 'Grade 4', 'Lớp 4', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'GRADE', 'GR5', 'Grade 5', 'Lớp 5', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'GRADE', 'GR6', 'Grade 6', 'Lớp 6', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 'GRADE', 'GR7', 'Grade 7', 'Lớp 7', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 'GRADE', 'GR8', 'Grade 8', 'Lớp 8', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 'GRADE', 'GR9', 'Grade 9', 'Lớp 9', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 'GRADE', 'GR10', 'Grade 10', 'Lớp 10', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 'GRADE', 'GR11', 'Grade 11', 'Lớp 11', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 'GRADE', 'GR12', 'Grade 12', 'Lớp 12', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 'DIFFICULTY', 'D1', 'Remember', 'Nhận biết', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 'DIFFICULTY', 'D2', 'Understand', 'Thông hiểu', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 'DIFFICULTY', 'D3', 'Apply', 'Vận dụng', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `class_distributions`
--

CREATE TABLE `class_distributions` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `classId` int(11) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `class_rooms`
--

CREATE TABLE `class_rooms` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exams`
--

CREATE TABLE `exams` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `semesterId` int(11) DEFAULT NULL,
  `questionGroupId` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `repeatTime` int(11) DEFAULT NULL,
  `inspectorId` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exam_answers`
--

CREATE TABLE `exam_answers` (
  `id` int(11) NOT NULL,
  `examParticipationId` int(11) DEFAULT NULL,
  `questionId` int(11) DEFAULT NULL,
  `answer` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`answer`)),
  `isCorrect` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exam_participations`
--

CREATE TABLE `exam_participations` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `examId` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`data`)),
  `correctAnswer` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`correctAnswer`)),
  `type` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `difficulty` varchar(255) DEFAULT NULL,
  `media` blob DEFAULT NULL,
  `creatorId` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question_groups`
--

CREATE TABLE `question_groups` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `creatorId` int(11) DEFAULT NULL,
  `questionSubmissionId` int(11) DEFAULT NULL,
  `approvedDate` datetime DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question_submissions`
--

CREATE TABLE `question_submissions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question_usings`
--

CREATE TABLE `question_usings` (
  `id` int(11) NOT NULL,
  `questionGroupId` int(11) DEFAULT NULL,
  `questionId` int(11) DEFAULT NULL,
  `orderNumber` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `semesters`
--

CREATE TABLE `semesters` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-create-all_code.js'),
('migration-create-class_distribution.js'),
('migration-create-class_room.js'),
('migration-create-exam_answer.js'),
('migration-create-exam_participation.js'),
('migration-create-exam.js'),
('migration-create-question_group.js'),
('migration-create-question_submission.js'),
('migration-create-question_using.js'),
('migration-create-question.js'),
('migration-create-semester.js'),
('migration-create-user.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_codes`
--
ALTER TABLE `all_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `class_distributions`
--
ALTER TABLE `class_distributions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `class_rooms`
--
ALTER TABLE `class_rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exam_answers`
--
ALTER TABLE `exam_answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exam_participations`
--
ALTER TABLE `exam_participations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question_groups`
--
ALTER TABLE `question_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question_submissions`
--
ALTER TABLE `question_submissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question_usings`
--
ALTER TABLE `question_usings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `semesters`
--
ALTER TABLE `semesters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `all_codes`
--
ALTER TABLE `all_codes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `class_distributions`
--
ALTER TABLE `class_distributions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `class_rooms`
--
ALTER TABLE `class_rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `exams`
--
ALTER TABLE `exams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `exam_answers`
--
ALTER TABLE `exam_answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `exam_participations`
--
ALTER TABLE `exam_participations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question_groups`
--
ALTER TABLE `question_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question_submissions`
--
ALTER TABLE `question_submissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question_usings`
--
ALTER TABLE `question_usings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `semesters`
--
ALTER TABLE `semesters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
