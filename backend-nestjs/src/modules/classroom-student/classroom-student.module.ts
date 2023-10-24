import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassroomStudent } from './classroom-student.entity';
import { ClassroomStudentController } from './classroom-student.controller';
import { ClassroomStudentService } from './classroom-student.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([ClassroomStudent])],
    controllers: [ClassroomStudentController],
    providers: [ClassroomStudentService],
    exports: [],
})
export class ClassroomStudentModule {}
