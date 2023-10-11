import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  Inject,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Query,
  Req,
  Res,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Express, Request, Response } from 'express';
import { MINIO_CONNECTION } from 'nestjs-minio';
import { Client } from 'minio';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppConfig, Config, MediaConfig } from '../../config/environment-variables';
import { ConfigService } from '@nestjs/config';
import { FileDto, FolderDto, FolderOrFileDto } from './media.type';
import { FileNameValidator } from '../base/validator/file-name.validator';
import { BucketItemWithMetadata } from 'minio/src/internal/type';
import { MediaUploadReqDto } from './media-upload-req.dto';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';

const BASE_CONTROLLER_PATH = 'api/v1/medias';
const UPLOAD_PATH = 'upload';

@ApiTags('Medias')
@ApiExtraModels(FolderDto, FileDto)
@Controller(BASE_CONTROLLER_PATH)
export class MediaController {
  private readonly appCfg: AppConfig;
  private readonly bucketName: string;

  constructor(
    @Inject(MINIO_CONNECTION) private readonly minioClient: Client,
    private readonly configService: ConfigService<Config>,
  ) {
    this.appCfg = configService.get<AppConfig>('app');
    this.bucketName = configService.get<MediaConfig>('media').minioBucketName;
  }

  private getLinkFromObjectName(objectName: string): string {
    return `${this.appCfg.protocol}://${this.appCfg.host}:${this.appCfg.port}/${BASE_CONTROLLER_PATH}/${UPLOAD_PATH}/${objectName}`;
  }

  @ApiOperation({ summary: 'Danh sách các folder và file đã upload' })
  @ApiQuery({
    name: 'prefixPath',
    description: 'Dùng để chỉ định prefix path (đường dẫn thư mục) muốn lấy',
    example: '"foo/bar/" để lấy danh sách tất cả thư mục và file bên trong "foo/bar/"',
  })
  @ApiOkResponse({
    description: 'List of folders and files',
    schema: {
      type: 'array',
      items: {
        oneOf: [{ $ref: getSchemaPath(FolderDto) }, { $ref: getSchemaPath(FileDto) }],
      },
    },
  })
  @Get('/')
  async list(
    @Req() req: Request,
    @Query('prefixPath')
    prefixPath: string = '',
  ): Promise<Array<FolderOrFileDto>> {
    const stream = this.minioClient.extensions.listObjectsV2WithMetadata(
      this.bucketName,
      prefixPath,
      false,
    );
    const promise: Promise<BucketItemWithMetadata[]> = new Promise((resolve, reject) => {
      const items: BucketItemWithMetadata[] = [];
      stream.on('data', (item) => items.push(item));
      stream.on('end', () => resolve(items));
      stream.on('error', (err) => reject(err));
    });

    const items = await promise;
    console.log(items);

    return items.map((item) => {
      if (item.prefix) {
        return { prefix: item.prefix } satisfies FolderDto;
      } else {
        return {
          etag: item.etag,
          versionId: null,
          fileName: item.name.split('/').pop(),
          prefixPath,
          byteSize: item.size,
          mimeType: item.metadata['content-type'],
          link: this.getLinkFromObjectName(item.name),
          lastModifiedAt: item.lastModified,
        } satisfies FileDto;
      }
    });
  }

  @ApiOperation({
    summary: 'Tải về media',
    description: 'Dùng để stream về các file media như image, audio, video',
  })
  @Get(`${UPLOAD_PATH}/*`)
  async streamFile(@Req() req: Request, @Res({ passthrough: true }) rsp: Response) {
    const objectName = req.params[0];
    const fileName = objectName.split('/').pop();
    const statInfo = await this.minioClient.statObject(this.bucketName, objectName);
    const readableStream = await this.minioClient.getObject(this.bucketName, objectName);
    rsp.set({
      'Content-Type': statInfo.metaData['content-type'],
      'Content-Disposition': `attachment; filename="${fileName}"`,
    });
    return new StreamableFile(readableStream);
  }

  @ApiOperation({
    summary: 'Upload media',
    description: 'Gọi API này để upload media lên server',
  })
  @Post(UPLOAD_PATH)
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Req() req: Request,
    @Body() dto: MediaUploadReqDto,
    @UploadedFile(
      new ParseFilePipe({
        fileIsRequired: true,
        validators: [
          new FileNameValidator({ pattern: /^[A-Za-z0-9._-]+$/ }),
          new MaxFileSizeValidator({ maxSize: 104857600 }),
          new FileTypeValidator({ fileType: '^image/(gif|jpeg|png)$|^audio/mpeg$|^video/mp4$' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ): Promise<FileDto> {
    const fileName = file.originalname;
    const prefixPath = dto.prefixPath;
    const objectName = prefixPath + fileName;
    const mimeType = file.mimetype;

    await this.minioClient.putObject(this.bucketName, objectName, file.buffer, {
      'Content-Type': mimeType,
    });

    const statInfo = await this.minioClient.statObject(this.bucketName, objectName);

    return {
      etag: statInfo.etag,
      versionId: statInfo.versionId,
      fileName,
      prefixPath,
      byteSize: statInfo.size,
      mimeType,
      link: this.getLinkFromObjectName(objectName),
      lastModifiedAt: statInfo.lastModified,
    };
  }
}
