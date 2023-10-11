import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllCode } from './all-code.entity';
import { AllCodeController } from './all-code.controller';
import { AllCodeService } from './all-code.service';

@Module({
  imports: [TypeOrmModule.forFeature([AllCode])],
  providers: [AllCodeService],
  exports: [AllCodeService],
  controllers: [AllCodeController],
})
export class AllCodeModule {}
