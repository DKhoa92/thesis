import { Controller } from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Role } from './role.entity';
import { SwaggerControllerTag } from '../../config/swagger.constant';
import { MustAuthAndHasAnyRoleIn } from '../auth/auth.decorator';
import { RoleEnum } from '../base/enums/role.enum';
import { RoleRspDto } from './role.dto';

@Crud({
    model: {
        type: Role,
    },
    serialize: {
        get: RoleRspDto,
    },
    routes: {
        only: ['getManyBase', 'getOneBase'],
    },
    query: {
        sort: [{ field: 'id', order: 'ASC' }],
    },
})
@ApiTags(SwaggerControllerTag.ROLES.tag)
@MustAuthAndHasAnyRoleIn()
@Controller('api/v1/roles')
export class RoleController implements CrudController<Role> {
    constructor(public service: RoleService) {}

    get base(): CrudController<Role> {
        return this;
    }
}
