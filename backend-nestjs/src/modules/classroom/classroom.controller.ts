import { Controller } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Classroom } from './classroom.entity';
import { SwaggerControllerTag } from '../../config/swagger.constant';
import { MustAuthAndHasAnyRoleIn } from '../auth/auth.decorator';
import { RoleEnum } from '../base/enums/role.enum';
import { ClassroomRspDto } from './classroom.dto';
import { UserShortRspDto } from '../user/user.dto';
import { SchoolYearShortRspDto } from '../school-year/school-year.dto';
import { GradeShortRspDto } from '../grade/grade.dto';

@Crud({
    model: {
        type: Classroom,
    },
    serialize: {
        get: ClassroomRspDto,
    },
    routes: {
        only: ['getManyBase', 'getOneBase'],
    },
    query: {
        sort: [{ field: 'id', order: 'ASC' }],
        join: {
            schoolYear: {
                eager: true,
                allow: SchoolYearShortRspDto.fields(),
            },
            grade: {
                eager: true,
                allow: GradeShortRspDto.fields(),
            },
            teacher: {
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
@ApiTags(SwaggerControllerTag.CLASSROOMS.tag)
@MustAuthAndHasAnyRoleIn()
@Controller('api/v1/classrooms')
export class ClassroomController implements CrudController<Classroom> {
    constructor(public service: ClassroomService) {}

    get base(): CrudController<Classroom> {
        return this;
    }
}
