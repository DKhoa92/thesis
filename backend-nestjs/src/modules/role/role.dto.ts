import { PickType } from '@nestjs/swagger';
import { Role } from './role.entity';

export class RoleRspDto extends PickType(Role, [
    'id',
    'code',
    'title',
    'description',
    'createdAt',
    'lastUpdatedAt',
] as const) {}

export class RoleShortRspDto extends PickType(Role, ['id', 'code', 'title'] as const) {}
