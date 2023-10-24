import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './subject.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class SubjectService extends TypeOrmCrudService<Subject> {
    constructor(@InjectRepository(Subject) repo) {
        super(repo);
    }
}
1;
