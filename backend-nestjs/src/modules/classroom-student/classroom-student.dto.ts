import { PickType } from '@nestjs/swagger';
import { ClassroomStudent } from './classroom-student.entity';
import { UserShortRspDto } from '../user/user.dto';
import { GradeShortRspDto } from '../grade/grade.dto';
import { SchoolYearShortRspDto } from '../school-year/school-year.dto';
import { ClassroomShortRspDto } from '../classroom/classroom.dto';

export class ClassroomStudentRspDto extends PickType(ClassroomStudent, [
    'id',
    'createdAt',
    'lastUpdatedAt',
] as const) {
    /**
     * Lớp học
     */
    classroom: ClassroomShortRspDto;

    /**
     * Học sinh
     */
    student: UserShortRspDto;

    /**
     * Người tạo
     */
    createdBy: UserShortRspDto;

    /**
     * Người cập nhật cuối cùng
     */
    lastUpdatedBy: UserShortRspDto;
}

export class ClassroomStudentShortRspDto extends PickType(ClassroomStudent, ['id'] as const) {}
