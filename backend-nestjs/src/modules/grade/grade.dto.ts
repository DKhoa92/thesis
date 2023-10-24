import { PickType } from '@nestjs/swagger';
import { Grade } from './grade.entity';
import { DurationShortRspDto } from '../duration/duration.dto';

export class GradeRspDto extends PickType(Grade, [
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

export class GradeShortRspDto extends PickType(Grade, ['id', 'code', 'title'] as const) {
    static fields(): string[] {
        return ['id', 'code', 'title'];
    }
}
