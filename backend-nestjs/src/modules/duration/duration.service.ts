import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Duration } from './duration.entity';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class DurationService extends TypeOrmCrudService<Duration> {
    constructor(@InjectRepository(Duration) repo) {
        super(repo);
    }
}
