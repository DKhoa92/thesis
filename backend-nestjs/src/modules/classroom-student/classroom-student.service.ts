import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassroomStudent } from './classroom-student.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class ClassroomStudentService extends TypeOrmCrudService<ClassroomStudent> {
    constructor(@InjectRepository(ClassroomStudent) repo) {
        super(repo);
    }
}
