import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from './classroom.entity';
import { ClassroomController } from './classroom.controller';
import { ClassroomService } from './classroom.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([Classroom])],
    controllers: [ClassroomController],
    providers: [ClassroomService],
    exports: [],
})
export class ClassroomModule {}
