import { Controller } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Subject } from './subject.entity';
import { SwaggerControllerTag } from '../../config/swagger.constant';
import { MustAuthAndHasAnyRoleIn } from '../auth/auth.decorator';
import { RoleEnum } from '../base/enums/role.enum';
import { SubjectRspDto } from './subject.dto';

@Crud({
    model: {
        type: Subject,
    },
    serialize: {
        get: SubjectRspDto,
    },
    routes: {
        only: ['getManyBase', 'getOneBase'],
    },
    query: {
        sort: [{ field: 'id', order: 'ASC' }],
        join: {
            grade: {
                eager: true,
                allow: ['id', 'title'],
            },
        },
    },
})
@ApiTags(SwaggerControllerTag.SUBJECTS.tag)
@MustAuthAndHasAnyRoleIn()
@Controller('api/v1/subjects')
export class SubjectController implements CrudController<Subject> {
    constructor(public service: SubjectService) {}

    get base(): CrudController<Subject> {
        return this;
    }
}
