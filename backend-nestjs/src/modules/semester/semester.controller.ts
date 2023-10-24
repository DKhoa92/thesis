import { Controller } from '@nestjs/common';
import { SemesterService } from './semester.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Semester } from './semester.entity';
import { SwaggerControllerTag } from '../../config/swagger.constant';
import { MustAuthAndHasAnyRoleIn } from '../auth/auth.decorator';
import { RoleEnum } from '../base/enums/role.enum';
import { SemesterRspDto } from './semester.dto';
import { UserShortRspDto } from '../user/user.dto';
import { SchoolYearShortRspDto } from '../school-year/school-year.dto';

@Crud({
    model: {
        type: Semester,
    },
    serialize: {
        get: SemesterRspDto,
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
@ApiTags(SwaggerControllerTag.SEMESTERS.tag)
@MustAuthAndHasAnyRoleIn()
@Controller('api/v1/semesters')
export class SemesterController implements CrudController<Semester> {
    constructor(public service: SemesterService) {}

    get base(): CrudController<Semester> {
        return this;
    }
}
