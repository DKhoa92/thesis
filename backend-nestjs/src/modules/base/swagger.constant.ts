export type ControllerTag = {
  tag: string;
  description: string;
};

type MediaTypeCode = 'AUTH' | 'USERS' | 'MEDIAS';

export const SwaggerControllerTag: Record<MediaTypeCode, ControllerTag> = {
  AUTH: { tag: 'Auth', description: 'Các endpoint phục vụ cho việc xác thực và phân quyền' },
  USERS: { tag: 'Users', description: 'Các endpoint quản lý tài nguyên "Người dùng"' },
  MEDIAS: { tag: 'Medias', description: 'Các endpoint quản lý tài nguyên "Media"' },
} as const;

export type SwaggerControllerTag = keyof typeof SwaggerControllerTag;
