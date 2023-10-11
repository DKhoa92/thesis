import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Config, MinioConfig } from '../../config/environment-variables';
import { NestMinioModule } from 'nestjs-minio';
import { MediaController } from './media.controller';

@Module({
  imports: [
    NestMinioModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Config>) => {
        const minioCfg = configService.get<MinioConfig>('minio');
        return {
          endPoint: minioCfg.host,
          port: minioCfg.port,
          useSSL: false,
          accessKey: minioCfg.accessKey,
          secretKey: minioCfg.secretKey,
        };
      },
    }),
  ],
  controllers: [MediaController],
})
export class MediaModule {}
