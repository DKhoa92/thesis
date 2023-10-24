import { Controller } from '@nestjs/common';
import { PeriodService } from './period.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Period } from './period.entity';
import { SwaggerControllerTag } from '../../config/swagger.constant';
import { MustAuthAndHasAnyRoleIn } from '../auth/auth.decorator';
import { RoleEnum } from '../base/enums/role.enum';
import { PeriodRspDto } from './period.dto';

@Crud({
    model: {
        type: Period,
    },
    serialize: {
        get: PeriodRspDto,
    },
    routes: {
        only: ['getManyBase', 'getOneBase'],
    },
    query: {
        sort: [{ field: 'id', order: 'ASC' }],
        join: {
            duration: {
                eager: true,
                allow: ['id', 'code', 'title'],
            },
        },
    },
})
@ApiTags(SwaggerControllerTag.PERIODS.tag)
@MustAuthAndHasAnyRoleIn()
@Controller('api/v1/periods')
export class PeriodController implements CrudController<Period> {
    constructor(public service: PeriodService) {}

    get base(): CrudController<Period> {
        return this;
    }
}
