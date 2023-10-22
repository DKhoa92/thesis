import { Injectable } from '@nestjs/common';
import {AppConfig, Config, GitConfig} from "./config/environment-variables";
import {ConfigService} from "@nestjs/config";
// import { execSync } from 'child_process';

// const executeGitCommand = (command) => {
//   return execSync(command)
//     .toString('utf8')
//     .replace(/[\n\r\s]+$/, '');
// };

@Injectable()
export class AppService {

  constructor(private readonly configService: ConfigService<Config>) {
  }

  getAppInfo(): any {
    const appConfig = this.configService.get<AppConfig>('app');
    const gitConfig = this.configService.get<GitConfig>('git');
    return {
      appName: appConfig.name,
      git: {
        branch: gitConfig.branch,
        commitHash: gitConfig.commit,
      },
    };
  }
}
