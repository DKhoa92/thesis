import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExampType } from './exam-type.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class ExampTypeService extends TypeOrmCrudService<ExampType> {
    constructor(@InjectRepository(ExampType) repo) {
        super(repo);
    }
}
1;
