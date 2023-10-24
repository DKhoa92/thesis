import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class RoleService extends TypeOrmCrudService<Role> {
  constructor(@InjectRepository(Role) repo) {
    super(repo);
  }
}
