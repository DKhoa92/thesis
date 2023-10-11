import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolYear } from './school-year.entity';
import { SchoolYearController } from './school-year.controller';
import { SchoolYearService } from './school-year.service';

@Module({
  imports: [TypeOrmModule.forFeature([SchoolYear])],
  providers: [SchoolYearService],
  exports: [SchoolYearService],
  controllers: [SchoolYearController],
})
export class SchoolYearModule {}
