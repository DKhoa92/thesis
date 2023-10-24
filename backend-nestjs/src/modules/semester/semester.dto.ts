import { PickType } from '@nestjs/swagger';
import { Semester } from './semester.entity';
import { UserShortRspDto } from '../user/user.dto';
import { SchoolYearShortRspDto } from '../school-year/school-year.dto';

export class SemesterRspDto extends PickType(Semester, [
    'id',
    'code',
    'title',
    'isCurrent',
    'startDate',
    'endDate',
    'createdAt',
    'lastUpdatedAt',
] as const) {
    /**
     * Năm học
     */
    schoolYear: SchoolYearShortRspDto;

    /**
     * Người tạo
     */
    createdBy: UserShortRspDto;

    /**
     * Người cập nhật cuối cùng
     */
    lastUpdatedBy: UserShortRspDto;
}

export class SemesterShortRspDto extends PickType(Semester, ['id', 'code', 'title'] as const) {}
