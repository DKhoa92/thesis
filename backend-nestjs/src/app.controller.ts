import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { AppConfig, Config } from './config/environment-variables';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Home')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService<Config>,
  ) {}

  @Get()
  getHello(): string {
    const appConfig = this.configService.get<AppConfig>('app');
    console.log(appConfig.host);
    return this.appService.getAppInfo();
  }
}
