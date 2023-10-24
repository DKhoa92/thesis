export type ControllerTag = {
    tag: string;
    description: string;
};

type MediaTypeCode =
    | 'AUTH'
    | 'ROLES'
    | 'USERS'
    | 'USERS_ROLES'
    | 'MEDIAS'
    | 'DURATIONS'
    | 'PERIODS'
    | 'EXAM_TYPES'
    | 'GRADES'
    | 'SUBJECTS'
    | 'SCHOOL_YEARS'
    | 'SEMESTERS'
    | 'CLASSROOMS'
    | 'CLASSROOMS_STUDENTS'
    | 'QUESTIONS'
    | 'QUESTION_SETS'
    | 'QUESTION_SETS_QUESTIONS'
    | 'EXAM'
    | 'EXAM_QUESTION_SET_SUBMISSIONS'
    | 'EXAM_PERIODS'
    | 'EXAM_PERIODS_INSPECTORS'
    | 'EXAM_PERIODS_PARTICIPATIONS'
    | 'STUDY_RESULTS';

export const SwaggerControllerTag: Record<MediaTypeCode, ControllerTag> = {
    AUTH: {
        tag: '01. Xác thực',
        description: 'Các endpoint phục vụ cho việc xác thực và phân quyền',
    },
    ROLES: { tag: '02. Vai trò', description: 'Các endpoint quản lý tài nguyên "Vai trò"' },
    USERS: { tag: '03. Người dùng', description: 'Các endpoint quản lý tài nguyên "Người dùng"' },
    USERS_ROLES: {
        tag: '04. Người dùng - Vai trò',
        description: 'Các endpoint quản lý vai trò của người dùng',
    },
    MEDIAS: { tag: '05. Media', description: 'Các endpoint quản lý tài nguyên "Media"' },

    DURATIONS: {
        tag: '10. Thời lượng',
        description:
            'Các endpoint quản lý tài nguyên "Thời lượng". Vd: 5 phút, 10 phút, 15 phút, ...',
    },
    PERIODS: {
        tag: '20. Tiết học',
        description:
            'Các endpoint quản lý tài nguyên "Tiết học". Vd: Tiết 1, Tiết 2, Giải lao, Tiết 3, ...',
    },
    EXAM_TYPES: {
        tag: '30. Loại thi',
        description: 'Các endpoint quản lý tài nguyên "Loại thi". Vd: Giữa kỳ, Cuối kỳ',
    },
    GRADES: {
        tag: '40. Bậc học',
        description: 'Các endpoint quản lý tài nguyên "Bậc học". Vd: Lớp 1, Lớp 2, Lớp 3, ...',
    },
    SUBJECTS: {
        tag: '50. Môn học',
        description:
            'Các endpoint quản lý tài nguyên "Môn học". Vd: Toán Lớp 1, Tiếng Việt Lớp 1, ...',
    },
    SCHOOL_YEARS: {
        tag: '60. Năm học',
        description:
            'Các endpoint quản lý tài nguyên "Năm học". Vd: Năm học 2022 - 2023, Năm học 2023 - 2024, ...',
    },
    SEMESTERS: {
        tag: '70. Học kỳ',
        description:
            'Các endpoint quản lý tài nguyên "Học kỳ". Vd: Học kỳ 1 Năm học 2022 - 2023, ...',
    },
    CLASSROOMS: {
        tag: '80. Lớp học',
        description: 'Các endpoint quản lý tài nguyên "Lớp học". Vd: Lớp 1A, 2B, 3C, ...',
    },
    CLASSROOMS_STUDENTS: {
        tag: '90. Lớp học - Học sinh',
        description:
            'Các endpoint quản lý tài nguyên "Lớp học - Học sinh". Dùng để quản lý các học sinh thuộc một lớp học.',
    },
    QUESTIONS: {
        tag: '100. Câu hỏi',
        description:
            'Các endpoint quản lý tài nguyên "Câu hỏi". Dùng để quản lý ngân hàng câu hỏi.',
    },
    QUESTION_SETS: {
        tag: '110. Bộ đề',
        description: 'Các endpoint quản lý tài nguyên "Bộ đề". Dùng để quản lý các bộ đề.',
    },
    QUESTION_SETS_QUESTIONS: {
        tag: '120. Bộ đề - Câu hỏi',
        description:
            'Các endpoint quản lý tài nguyên "Bộ đề - Câu hỏi". Dùng để quản lý các câu hỏi có trong một bộ đề.',
    },
    EXAM: {
        tag: '130. Kỳ thi',
        description:
            'Các endpoint quản lý tài nguyên "Kỳ thi". Dùng để quản lý các kỳ thi. Vd: Thi giữa kỳ Học kỳ 1 Năm học 2022 - 2023, ...',
    },
    EXAM_QUESTION_SET_SUBMISSIONS: {
        tag: '140. Kỳ thi - Bộ đề',
        description:
            'Các endpoint quản lý tài nguyên "Kỳ thi - Bộ đề". Dùng để quản lý các bộ đề được nộp từ giáo viên cho một kỳ thi cụ thể.',
    },
    EXAM_PERIODS: {
        tag: '150. Ca thi',
        description:
            'Các endpoint quản lý tài nguyên "Ca thi". Dùng để quản lý các ca thi của một kỳ thi.',
    },
    EXAM_PERIODS_INSPECTORS: {
        tag: '160. Ca thi - Giám thị',
        description:
            'Các endpoint quản lý tài nguyên "Ca thi - Giám thị". Dùng để quản lý các giám thị được phân bổ vào một ca thi.',
    },
    EXAM_PERIODS_PARTICIPATIONS: {
        tag: '170. Ca thi - Học sinh',
        description:
            'Các endpoint quản lý tài nguyên "Ca thi - Học sinh". Dùng để quản lý các học sinh có tham gia vào ca thi.',
    },
    STUDY_RESULTS: {
        tag: '180. Kết quả học tập',
        description:
            'Các endpoint quản lý tài nguyên "Kết quả học tập". Dùng để quản lý kết quả học tập qua từng năm của từng học sinh.',
    },
} as const;

export type SwaggerControllerTag = keyof typeof SwaggerControllerTag;
