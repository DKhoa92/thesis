import { Controller } from '@nestjs/common';
import { GradeService } from './grade.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Grade } from './grade.entity';
import { SwaggerControllerTag } from '../../config/swagger.constant';
import { MustAuthAndHasAnyRoleIn } from '../auth/auth.decorator';
import { RoleEnum } from '../base/enums/role.enum';
import { GradeRspDto } from './grade.dto';

@Crud({
    model: {
        type: Grade,
    },
    serialize: {
        get: GradeRspDto,
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
@ApiTags(SwaggerControllerTag.GRADES.tag)
@MustAuthAndHasAnyRoleIn()
@Controller('api/v1/grades')
export class GradeController implements CrudController<Grade> {
    constructor(public service: GradeService) {}

    get base(): CrudController<Grade> {
        return this;
    }
}
