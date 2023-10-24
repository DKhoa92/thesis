import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Classroom } from './classroom.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class ClassroomService extends TypeOrmCrudService<Classroom> {
    constructor(@InjectRepository(Classroom) repo) {
        super(repo);
    }
}
