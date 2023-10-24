import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grade } from './grade.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class GradeService extends TypeOrmCrudService<Grade> {
    constructor(@InjectRepository(Grade) repo) {
        super(repo);
    }
}
