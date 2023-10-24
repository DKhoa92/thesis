import Dictionary from './dictionary.type';

type QuestionSetSubmissionStatusCode = 'SUBMITTED' | 'APPROVED' | 'REJECTED';

export const QuestionSetSubmissionStatus: Record<QuestionSetSubmissionStatusCode, Dictionary> = {
  SUBMITTED: { code: 'SUBMITTED', name: 'Đã nộp' },
  APPROVED: { code: 'APPROVED', name: 'Đã được duyệt' },
  REJECTED: { code: 'REJECTED', name: 'Bị từ chối' },
} as const;

export type QuestionSetSubmissionStatus = keyof typeof QuestionSetSubmissionStatus;
