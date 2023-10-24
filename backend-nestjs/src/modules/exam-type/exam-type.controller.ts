import { Controller } from '@nestjs/common';
import { ExampTypeService } from './exam-type.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { ExampType } from './exam-type.entity';
import { SwaggerControllerTag } from '../../config/swagger.constant';
import { MustAuthAndHasAnyRoleIn } from '../auth/auth.decorator';
import { RoleEnum } from '../base/enums/role.enum';
import { ExampTypeRspDto } from './exam-type.dto';

@Crud({
    model: {
        type: ExampType,
    },
    serialize: {
        get: ExampTypeRspDto,
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
@ApiTags(SwaggerControllerTag.EXAM_TYPES.tag)
@MustAuthAndHasAnyRoleIn()
@Controller('api/v1/exam-types')
export class ExampTypeController implements CrudController<ExampType> {
    constructor(public service: ExampTypeService) {}

    get base(): CrudController<ExampType> {
        return this;
    }
}
