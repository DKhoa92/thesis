import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolYear } from './school-year.entity';
import { SchoolYearController } from './school-year.controller';
import { SchoolYearService } from './school-year.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([SchoolYear])],
    controllers: [SchoolYearController],
    providers: [SchoolYearService],
    exports: [],
})
export class SchoolYearModule {}
