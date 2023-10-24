import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Period } from './period.entity';
import { PeriodController } from './period.controller';
import { PeriodService } from './period.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([Period])],
    controllers: [PeriodController],
    providers: [PeriodService],
    exports: [],
})
export class PeriodModule {}
