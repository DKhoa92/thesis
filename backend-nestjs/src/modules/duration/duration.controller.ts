import { Controller } from '@nestjs/common';
import { DurationService } from './duration.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Duration } from './duration.entity';
import { SwaggerControllerTag } from '../../config/swagger.constant';
import { MustAuthAndHasAnyRoleIn } from '../auth/auth.decorator';
import { RoleEnum } from '../base/enums/role.enum';
import { DurationRspDto } from './duration.dto';

@Crud({
    model: {
        type: Duration,
    },
    serialize: {
        get: DurationRspDto,
    },
    routes: {
        only: ['getManyBase', 'getOneBase'],
    },
    query: {
        sort: [{ field: 'id', order: 'ASC' }],
    },
})
@ApiTags(SwaggerControllerTag.DURATIONS.tag)
@MustAuthAndHasAnyRoleIn()
@Controller('api/v1/durations')
export class DurationController implements CrudController<Duration> {
    constructor(public service: DurationService) {}

    get base(): CrudController<Duration> {
        return this;
    }
}
