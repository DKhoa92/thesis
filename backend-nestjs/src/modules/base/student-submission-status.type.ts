import Dictionary from './dictionary.type';

type StudentSubmissionStatusCode = 'NOT_YET' | 'DOING' | 'SUBMITTED';

export const StudentSubmissionStatus: Record<StudentSubmissionStatusCode, Dictionary> = {
  NOT_YET: { code: 'NOT_YET', name: 'Chưa đến thời gian thi hoặc chưa bắt đầu làm bài' },
  DOING: { code: 'APPROVED', name: 'Đang làm bài' },
  SUBMITTED: { code: 'REJECTED', name: 'Đã nộp' },
} as const;

export type StudentSubmissionStatus = keyof typeof StudentSubmissionStatus;
