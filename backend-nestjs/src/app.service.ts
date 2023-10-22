import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process';

const executeGitCommand = (command) => {
  return execSync(command)
    .toString('utf8')
    .replace(/[\n\r\s]+$/, '');
};

@Injectable()
export class AppService {
  getAppInfo(): any {
    return {
      appName: 'Online Exam',
      // version: 'v1.0',
      git: {
        branch: executeGitCommand('git rev-parse --abbrev-ref HEAD'),
        commitHash: executeGitCommand('git rev-parse HEAD'),
      },
    };
  }
}
