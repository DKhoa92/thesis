import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Semester } from './semester.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class SemesterService extends TypeOrmCrudService<Semester> {
    constructor(@InjectRepository(Semester) repo) {
        super(repo);
    }
}
