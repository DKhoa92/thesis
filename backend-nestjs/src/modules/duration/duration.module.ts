import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Duration } from './duration.entity';
import { DurationController } from './duration.controller';
import { DurationService } from './duration.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([Duration])],
    controllers: [DurationController],
    providers: [DurationService],
    exports: [],
})
export class DurationModule {}
