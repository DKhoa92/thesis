import { Controller } from '@nestjs/common';
import { AllCodeService } from './all-code.service';
import { AllCode } from './all-code.entity';
import { Crud, CrudController } from '@dataui/crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: AllCode,
  },
  routes: {
    only: ['getManyBase', 'getOneBase'],
  },
})
@ApiTags('All Codes')
@Controller('api/v1/all-codes')
export class AllCodeController implements CrudController<AllCode> {
  constructor(public service: AllCodeService) {}
}
