import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { SwaggerControllerTag as SCT } from './config/swagger.constant';

@ApiTags('Home')
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        for (const key of Object.keys(SCT)) {
            const item = SCT[key] as { tag: string; description: string };
            console.log(`tag: ${item.tag} | desc: ${item.description} `);
        }
        return this.appService.getAppInfo();
    }
}
