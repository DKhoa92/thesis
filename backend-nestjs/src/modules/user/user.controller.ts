import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
    Crud,
    CrudController,
    CrudRequest,
    GetManyDefaultResponse,
    Override,
    ParsedRequest,
} from '@dataui/crud';
import { User } from './user.entity';
import { SwaggerControllerTag } from '../../config/swagger.constant';
import { UserRspDto } from './user.dto';

@Crud({
    model: {
        type: User,
    },
    routes: {
        only: ['getManyBase', 'getOneBase', 'createOneBase', 'deleteOneBase'],
        // getManyBase: {
        //   decorators: [ApiOperation({ summary: 'Danh sách' })],
        // },
        // getOneBase: {
        //   decorators: [ApiOperation({ summary: 'Chi tiết một user' })],
        // },
        // createOneBase: {
        //   decorators: [ApiOperation({ summary: 'Tạo một user' })],
        // },
        // deleteOneBase: {
        //   decorators: [ApiOperation({ summary: 'Xóa một user' })],
        // },
    },
    query: {
        sort: [{ field: 'id', order: 'DESC' }],
    },
    serialize: {
        getMany: UserRspDto,
    },
})
@ApiTags(SwaggerControllerTag.USERS.tag)
@Controller('api/v1/users')
export class UserController implements CrudController<User> {
    constructor(public service: UserService) {}

    get base(): CrudController<User> {
        return this;
    }

    @Override()
    getMany(@ParsedRequest() req: CrudRequest): Promise<GetManyDefaultResponse<User> | User[]> {
        return this.base.getManyBase(req);
    }

    @Override()
    getOne(@ParsedRequest() req: CrudRequest): Promise<UserRspDto> {
        return this.base.getOneBase(req);
    }

    // @Post('/test')
    // base(@Body() dto: UserTestReqDto) {
    //   return dto;
    // }
}
