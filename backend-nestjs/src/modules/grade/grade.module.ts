import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grade } from './grade.entity';
import { GradeController } from './grade.controller';
import { GradeService } from './grade.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([Grade])],
    controllers: [GradeController],
    providers: [GradeService],
    exports: [],
})
export class GradeModule {}
