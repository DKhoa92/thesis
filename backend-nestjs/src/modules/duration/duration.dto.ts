import { PickType } from '@nestjs/swagger';
import { Duration } from './duration.entity';

export class DurationRspDto extends PickType(Duration, [
    'id',
    'code',
    'title',
    'valueInMinutes',
    'createdAt',
    'lastUpdatedAt',
] as const) {}

export class DurationShortRspDto extends PickType(Duration, ['id', 'code', 'title'] as const) {}
