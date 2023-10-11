import { Controller } from '@nestjs/common';
import { SchoolYearService } from './school-year.service';
import { SchoolYear } from './school-year.entity';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: SchoolYear,
  },
  routes: {
    only: ['getManyBase', 'getOneBase'],
  },
})
@ApiTags('School Years')
@Controller('api/v1/school-years')
export class SchoolYearController implements CrudController<SchoolYear> {
  constructor(public service: SchoolYearService) {}
}
