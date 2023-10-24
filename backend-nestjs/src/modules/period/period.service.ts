import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Period } from './period.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class PeriodService extends TypeOrmCrudService<Period> {
    constructor(@InjectRepository(Period) repo) {
        super(repo);
    }
}
1;
