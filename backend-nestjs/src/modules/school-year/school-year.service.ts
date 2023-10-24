import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SchoolYear } from './school-year.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class SchoolYearService extends TypeOrmCrudService<SchoolYear> {
    constructor(@InjectRepository(SchoolYear) repo) {
        super(repo);
    }
}
