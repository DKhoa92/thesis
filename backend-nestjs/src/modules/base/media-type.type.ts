import Dictionary from './dictionary.type';

type MediaTypeCode = 'IMAGE' | 'AUDIO' | 'VIDEO';

export const MediaType: Record<MediaTypeCode, Dictionary> = {
  IMAGE: { code: 'IMAGE', name: 'Hình ảnh' },
  AUDIO: { code: 'AUDIO', name: 'Âm thanh' },
  VIDEO: { code: 'VIDEO', name: 'Video' },
} as const;

export type MediaType = keyof typeof MediaType;
