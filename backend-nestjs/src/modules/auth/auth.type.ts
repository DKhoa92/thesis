import { IsNotEmpty } from 'class-validator';
import { RoleEnum } from '../base/role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class LoginReqDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class LoginRspDto {
  accessToken: string;
}

export class JwtPayload {
  @ApiProperty({
    description: 'Định danh duy nhất cho user',
    example: 'user01',
  })
  sub: string;

  @ApiProperty({
    description: 'Username',
    example: 'user01',
  })
  userName: string;

  @ApiProperty({
    description: 'Email',
    example: 'user01@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'Tên lót và tên',
    example: 'Việt Huy',
  })
  firstName: string;

  @ApiProperty({
    description: 'Họ',
    example: 'Dương',
  })
  lastName: string;

  @ApiProperty({
    description: 'Danh sách role',
    example: '["STUDENT"]',
  })
  roles: RoleEnum[];
}
