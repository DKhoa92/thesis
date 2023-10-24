import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Semester } from './semester.entity';
import { SemesterController } from './semester.controller';
import { SemesterService } from './semester.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([Semester])],
    controllers: [SemesterController],
    providers: [SemesterService],
    exports: [],
})
export class SemesterModule {}
