import Dictionary from './dictionary.type';

type QuestionCode = 'TRUE_FALSE' | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'MATCHING' | 'FILLING';

export const QuestionType: Record<QuestionCode, Dictionary> = {
  TRUE_FALSE: { code: 'TRUE_FALSE', name: 'Trắc nghiệm đúng/sai' },
  SINGLE_CHOICE: { code: 'SINGLE_CHOICE', name: 'Trắc nghiệm 1 đáp án đúng' },
  MULTIPLE_CHOICE: {
    code: 'MULTIPLE_CHOICE',
    name: 'Trắc nghiệm nhiều đáp án đúng',
  },
  MATCHING: { code: 'MATCHING', name: 'Đối chiếu cặp' },
  FILLING: { code: 'FILLING', name: 'Điền vào chỗ trống' },
} as const;

export type QuestionType = keyof typeof QuestionType;
