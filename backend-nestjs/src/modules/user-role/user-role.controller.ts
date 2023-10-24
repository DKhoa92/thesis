import { Controller } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { UserRole } from './user-role.entity';
import { SwaggerControllerTag } from '../../config/swagger.constant';

@Crud({
    model: {
        type: UserRole,
    },
    routes: {
        only: ['getManyBase', 'getOneBase', 'createOneBase', 'deleteOneBase'],
    },
    query: {
        sort: [{ field: 'id', order: 'DESC' }],
        join: {
            user: {
                eager: true,
                allow: ['id', 'userName', 'email', 'firstName', 'lastName'],
            },
            role: {
                eager: true,
                allow: ['id', 'code', 'title'],
            },
        },
    },
})
@ApiTags(SwaggerControllerTag.USERS_ROLES.tag)
@Controller('api/v1/users-roles')
export class UserRoleController implements CrudController<UserRole> {
    constructor(public service: UserRoleService) {}

    get base(): CrudController<UserRole> {
        return this;
    }
}
