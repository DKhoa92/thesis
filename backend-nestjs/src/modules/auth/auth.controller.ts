import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtPayload, LoginReqDto, LoginRspDto } from './auth.type';
import { MustAuthAndHasAnyRoleIn } from './auth.decorator';
import { SwaggerControllerTag } from '../base/swagger.constant';

@ApiTags(SwaggerControllerTag.AUTH.tag)
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @ApiOperation({ summary: 'Đăng nhập', description: 'Đăng nhập để lấy token' })
  @Post('/login')
  login(@Body() dto: LoginReqDto): Promise<LoginRspDto> {
    return this.service.login(dto.username, dto.password);
  }

  @MustAuthAndHasAnyRoleIn()
  @ApiOperation({ summary: 'Lấy thông tin người dùng đang đăng nhập' })
  @Get('/info')
  info(@Request() req: Request & { authInfo: JwtPayload }): JwtPayload {
    return req.authInfo;
  }
}
