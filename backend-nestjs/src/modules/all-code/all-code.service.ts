import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AllCode } from './all-code.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class AllCodeService extends TypeOrmCrudService<AllCode> {
  constructor(@InjectRepository(AllCode) repo) {
    super(repo);
  }
}
