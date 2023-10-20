import { NestFactory } from '@nestjs/core';
import { CrudConfigService } from '@dataui/crud';

CrudConfigService.load({
  query: {
    limit: 20,
    maxLimit: 1000,
    alwaysPaginate: true,
  },
});

import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AppConfig, Config } from './config/environment-variables';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerControllerTag as SCT } from './modules/base/swagger.constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Online Exam API')
    .setDescription('The Online Exam API')
    .setVersion('v1.0')
    .addBearerAuth()
    .addTag(SCT.AUTH.tag, SCT.AUTH.description)
    .addTag(SCT.MEDIAS.tag, SCT.MEDIAS.description)
    .addTag(SCT.USERS.tag, SCT.USERS.description)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
    },
  });

  const configService = app.get(ConfigService<Config>);
  const appConfig = configService.get<AppConfig>('app');
  await app.listen(appConfig.port);
  Logger.log(`Listening on http://${appConfig.host}:${appConfig.port}`);
}

bootstrap();
