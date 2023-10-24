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
import { SwaggerControllerTag as SCT } from './config/swagger.constant';
import { swaggerSetup } from './config/swagger-config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );
    app.enableCors();

    swaggerSetup(app);

    const configService = app.get(ConfigService<Config>);
    const appConfig = configService.get<AppConfig>('app');
    await app.listen(appConfig.port);
    Logger.log(`Listening on http://${appConfig.host}:${appConfig.port}`);
}

bootstrap();
