import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { JwtPayload, LoginReqDto } from './auth.type';
import { MustAuthAndHasAnyRoleIn } from './auth.decorator';
import { SwaggerControllerTag } from '../base/swagger.constant';

@ApiTags(SwaggerControllerTag.AUTH.tag)
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @ApiOperation({ summary: 'Đăng nhập', description: 'Đăng nhập để lấy token' })
  @Post('/login')
  login(@Body() dto: LoginReqDto): any {
    return this.service.login(dto.username, dto.password);
  }

  @MustAuthAndHasAnyRoleIn()
  @ApiExtraModels(JwtPayload)
  @ApiOperation({ summary: 'Lấy thông tin người dùng đang đăng nhập' })
  @ApiOkResponse({
    schema: {
      $ref: getSchemaPath(JwtPayload),
    },
  })
  @Get('/info')
  info(@Request() req): Promise<JwtPayload> {
    return req.authInfo;
  }
}
