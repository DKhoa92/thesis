import { Controller } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { Classroom } from './classroom.entity';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { ClassroomRspDto } from './classroom-rsp.dto';

@Crud({
  model: {
    type: Classroom,
  },
  routes: {
    only: ['getManyBase', 'getOneBase'],
  },
  query: {
    join: {
      schoolYear: {
        eager: true,
      },
      teacher: {
        eager: true,
      },
    },
  },
  serialize: {
    getMany: ClassroomRspDto,
  },
})
@ApiTags('Classrooms')
@Controller('api/v1/classrooms')
export class ClassroomController implements CrudController<Classroom> {
  constructor(public service: ClassroomService) {}
}
