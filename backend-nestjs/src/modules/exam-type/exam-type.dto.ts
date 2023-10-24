import { PickType } from '@nestjs/swagger';
import { ExampType } from './exam-type.entity';
import { DurationShortRspDto } from '../duration/duration.dto';

export class ExampTypeRspDto extends PickType(ExampType, [
    'id',
    'code',
    'title',
    'createdAt',
    'lastUpdatedAt',
] as const) {
    /**
     * Thời lượng
     */
    duration: DurationShortRspDto;
}

export class ExampTypeShortRspDto extends PickType(ExampType, ['id', 'code', 'title'] as const) {}
