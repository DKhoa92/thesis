import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerControllerTag as SCT } from './swagger.constant';

export const swaggerSetup = (app: INestApplication<any>): void => {
    const documentBuilder = new DocumentBuilder()
        .setTitle('Online Exam API')
        .setDescription('The Online Exam API')
        .setVersion('v1.0')
        .addServer('http://localhost:8080', 'Local server')
        .addServer('https://api.bkthesis.site', 'Dev server')
        .addBearerAuth();
    for (const key of Object.keys(SCT)) {
        const item = SCT[key] as { tag: string; description: string };
        documentBuilder.addTag(item.tag, item.description);
    }

    for (const key of Object.keys(SCT)) {
        const item = SCT[key] as { tag: string; description: string };
        console.log(`tag: ${item.tag} | desc: ${item.description} `);
    }

    const document = SwaggerModule.createDocument(app, documentBuilder.build());
    SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
            tagsSorter: 'number',
            docExpansion: 'none',
        },
    });
};
