import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { User } from './user.entity';

@Crud({
  model: {
    type: User,
  },
  routes: {
    only: ['getManyBase', 'getOneBase'],
  },
})
// @CrudAuth({
//   property: 'authInfo',
//   filter: (user: User) => ({
//     id: 10,
//   }),
// })
@ApiTags('Users')
@Controller('api/v1/users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}

  @Get('/test')
  test() {
    return 123;
  }
}
