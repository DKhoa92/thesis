import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppInfo(): any {
    return {
      appName: 'Online Exam',
      version: 'v1.0',
    };
  }
}
