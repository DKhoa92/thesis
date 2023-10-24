import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from './user-role.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class UserRoleService extends TypeOrmCrudService<UserRole> {
  constructor(@InjectRepository(UserRole) repo) {
    super(repo);
  }
}
