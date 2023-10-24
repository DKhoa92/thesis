import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './subject.entity';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([Subject])],
    controllers: [SubjectController],
    providers: [SubjectService],
    exports: [],
})
export class SubjectModule {}
