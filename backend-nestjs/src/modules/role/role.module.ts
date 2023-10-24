import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([Role])],
    controllers: [RoleController],
    providers: [RoleService],
    exports: [],
})
export class RoleModule {}
