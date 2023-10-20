export class FolderDto {
  /**
   * The prefix path
   * @example 'foo/bar/'
   */
  prefix: string;
}

export class FileDto {
  /**
   * Giá trị hash etag của MinIO
   * @example 'd9061d3da8601932e98f79ec8ba1c877'
   */
  etag: string;

  /**
   * Giá trị version ID của MinIO
   */
  versionId?: string;

  /**
   * Tên file
   * @example 'video.mp4'
   */
  fileName: string;

  /**
   * The prefix path
   * @example 'foo/bar/'
   */
  prefixPath: string;

  /**
   * Giá trị MIME type của file
   * @example 'video/mp4'
   */
  mimeType: string;

  /**
   * Kích thước file (tính bằng byte)
   * @example 2000
   */
  byteSize: number;

  /**
   * Link download file
   * @example 'http://localhost:8080/api/v1/medias/upload/foo/bar/video.mp4'
   */
  link: string;

  /**
   * Tracking thời gian cập nhật file
   * @example '2023-10-18T04:51:09.000Z'
   */
  lastModifiedAt: Date;
}

export class FolderOrFileDto {
  /**
   * Thông tin thư mục (Chỉ có giá trị khi là thư mục)
   */
  folder?: FolderDto;

  /**
   * Thông tin file (Chỉ có giá trị khi là file)
   */
  file?: FileDto;
}

export class MediaUploadReqDto {
  /**
   * Đường dẫn thư mục sẽ upload file
   * @example 'foo/bar/'
   */
  prefixPath: string;
}
