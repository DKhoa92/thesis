import { PickType } from '@nestjs/swagger';
import { Subject } from './subject.entity';
import { GradeShortRspDto } from '../grade/grade.dto';

export class SubjectRspDto extends PickType(Subject, [
    'id',
    'title',
    'description',
    'createdAt',
    'lastUpdatedAt',
] as const) {
    /**
     * Bậc học
     */
    grade: GradeShortRspDto;
}

export class SubjectShortRspDto extends PickType(Subject, ['id', 'title'] as const) {}
