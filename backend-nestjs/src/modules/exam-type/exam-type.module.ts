import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampType } from './exam-type.entity';
import { ExampTypeController } from './exam-type.controller';
import { ExampTypeService } from './exam-type.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([ExampType])],
    controllers: [ExampTypeController],
    providers: [ExampTypeService],
    exports: [],
})
export class ExampTypeModule {}
