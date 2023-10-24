import { Controller } from '@nestjs/common';
import { SchoolYearService } from './school-year.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { SchoolYear } from './school-year.entity';
import { SwaggerControllerTag } from '../../config/swagger.constant';
import { MustAuthAndHasAnyRoleIn } from '../auth/auth.decorator';
import { RoleEnum } from '../base/enums/role.enum';
import { SchoolYearRspDto } from './school-year.dto';
import { UserShortRspDto } from '../user/user.dto';

@Crud({
    model: {
        type: SchoolYear,
    },
    serialize: {
        get: SchoolYearRspDto,
    },
    routes: {
        only: ['getManyBase', 'getOneBase'],
    },
    query: {
        sort: [{ field: 'id', order: 'ASC' }],
        join: {
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
@ApiTags(SwaggerControllerTag.SCHOOL_YEARS.tag)
@MustAuthAndHasAnyRoleIn()
@Controller('api/v1/school-years')
export class SchoolYearController implements CrudController<SchoolYear> {
    constructor(public service: SchoolYearService) {}

    get base(): CrudController<SchoolYear> {
        return this;
    }
}
