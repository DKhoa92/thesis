import { PickType } from '@nestjs/swagger';
import { Period } from './period.entity';
import { DurationShortRspDto } from '../duration/duration.dto';

export class PeriodRspDto extends PickType(Period, [
    'id',
    'code',
    'title',
    'startAt',
    'createdAt',
    'lastUpdatedAt',
] as const) {
    /**
     * Thời lượng
     */
    duration: DurationShortRspDto;
}

export class PeriodShortRspDto extends PickType(Period, ['id', 'code', 'title'] as const) {}
