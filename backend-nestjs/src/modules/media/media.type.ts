import { ApiProperty } from '@nestjs/swagger';

export class FolderDto {
  @ApiProperty({
    description: 'The prefix path',
    example: 'foo/bar/',
  })
  prefix: string;
}

export class FileDto {
  @ApiProperty({
    description: 'The etag of minio',
    example: 'd9061d3da8601932e98f79ec8ba1c877',
  })
  etag: string;

  @ApiProperty({
    description: 'The version ID of minio',
    required: false,
    nullable: true,
    example: null,
  })
  versionId: string;

  @ApiProperty({
    description: 'The file name',
    example: 'video.mp4',
  })
  fileName: string;

  @ApiProperty({
    description: 'The prefix path',
    example: 'foo/bar/',
  })
  prefixPath: string;

  @ApiProperty({
    description: 'The MIME type of file',
    example: 'video/mp4',
  })
  mimeType: string;

  @ApiProperty({
    description: 'Size in bytes',
    example: 2000,
  })
  byteSize: number;

  @ApiProperty({
    description: 'Link to download media',
    example: 'http://localhost:8080/api/v1/medias/upload/foo/bar/video.mp4',
  })
  link: string;

  @ApiProperty({
    description: 'Tracking last modified at',
    example: '2023-10-18T04:51:09.000Z',
  })
  lastModifiedAt: Date;
}

export declare type FolderOrFileDto = FolderDto | FileDto;
