import Dictionary from './dictionary.type';

type MediaMimeTypeCode =
  | 'IMAGE_JPEG'
  | 'IMAGE_PNG'
  | 'IMAGE_GIF'
  | 'IMAGE_SVG'
  | 'AUDIO_WEBM'
  | 'AUDIO_MPEG'
  | 'VIDEO_WAVE'
  | 'VIDEO_MP4';

export const MediaMimeType: Record<MediaMimeTypeCode, Dictionary> = {
  IMAGE_JPEG: { code: 'image/jpeg', name: 'image/jpeg' },
  IMAGE_PNG: { code: 'image/png', name: 'image/png' },
  IMAGE_GIF: { code: 'image/gif', name: 'image/gif' },
  IMAGE_SVG: { code: 'image/svg+xml', name: 'image/svg+xml' },
  AUDIO_WEBM: { code: 'audio/webm', name: 'audio/webm' },
  AUDIO_MPEG: { code: 'audio/mpeg', name: 'audio/mpeg' },
  VIDEO_WAVE: { code: 'video/webm', name: 'video/webm' },
  VIDEO_MP4: { code: 'video/mp4', name: 'video/mp4' },
} as const;

export type MediaMimeType = keyof typeof MediaMimeType;
