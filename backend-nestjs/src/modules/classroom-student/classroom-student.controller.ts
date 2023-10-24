import { Controller } from '@nestjs/common';
import { ClassroomStudentService } from './classroom-student.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { ClassroomStudent } from './classroom-student.entity';
import { SwaggerControllerTag } from '../../config/swagger.constant';
import { MustAuthAndHasAnyRoleIn } from '../auth/auth.decorator';
import { RoleEnum } from '../base/enums/role.enum';
import { ClassroomStudentRspDto } from './classroom-student.dto';
import { UserShortRspDto } from '../user/user.dto';
import { SchoolYearShortRspDto } from '../school-year/school-year.dto';
import { GradeShortRspDto } from '../grade/grade.dto';
import { ClassroomShortRspDto } from '../classroom/classroom.dto';

@Crud({
    model: {
        type: ClassroomStudent,
    },
    serialize: {
        get: ClassroomStudentRspDto,
    },
    routes: {
        only: ['getManyBase', 'getOneBase'],
    },
    query: {
        sort: [{ field: 'id', order: 'ASC' }],
        join: {
            classroom: {
                eager: true,
                allow: ClassroomShortRspDto.fields(),
            },
            'classroom.grade': {
                eager: true,
                allow: GradeShortRspDto.fields(),
            },
            student: {
                eager: true,
                allow: UserShortRspDto.fields(),
            },
            createdBy: {
                eager: true,
                allow: UserShortRspDto.fields(),
            },
            lastUpdatedBy: {
                eager: true,
                allow: UserShortRspDto.fields(),
            },
        },
    },
})
@ApiTags(SwaggerControllerTag.CLASSROOMS_STUDENTS.tag)
// @MustAuthAndHasAnyRoleIn()
@Controller('api/v1/classrooms-students')
export class ClassroomStudentController implements CrudController<ClassroomStudent> {
    constructor(public service: ClassroomStudentService) {}

    get base(): CrudController<ClassroomStudent> {
        return this;
    }
}
