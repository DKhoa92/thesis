import { PickType } from '@nestjs/swagger';
import { Classroom } from './classroom.entity';
import { UserShortRspDto } from '../user/user.dto';
import { GradeShortRspDto } from '../grade/grade.dto';
import { SchoolYearShortRspDto } from '../school-year/school-year.dto';

export class ClassroomRspDto extends PickType(Classroom, [
    'id',
    'section',
    'createdAt',
    'lastUpdatedAt',
] as const) {
    /**
     * Năm học
     */
    schoolYear: SchoolYearShortRspDto;

    /**
     * Bậc học
     */
    grade: GradeShortRspDto;

    /**
     * Giáo viên chủ nhiệm
     */
    teacher: UserShortRspDto;

    /**
     * Người tạo
     */
    createdBy: UserShortRspDto;

    /**
     * Người cập nhật cuối cùng
     */
    lastUpdatedBy: UserShortRspDto;
}

export class ClassroomShortRspDto extends PickType(Classroom, ['id', 'section'] as const) {
    static fields(): string[] {
        return ['id', 'section'];
    }

    /**
     * Bậc học
     */
    grade: GradeShortRspDto;
}
