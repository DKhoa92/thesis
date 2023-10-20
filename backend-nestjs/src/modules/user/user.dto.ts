import { IsNotEmpty, IsNumber, IsString, Length, Max, Min } from 'class-validator';
import { OmitType, PickType } from '@nestjs/swagger';
import { User } from './user.entity';
import { AutoMap } from '@automapper/classes';

export class UserRspDto extends PickType(User, [
  'id',
  'userName',
  'firstName',
  'lastName',
  'isMale',
  'birthDate',
  'phoneNumber',
  'address',
  'avatar',
  'createdAt',
  'lastUpdatedAt',
] as const) {}

export class UserTestReqDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 5)
  key1: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(10)
  @Max(20)
  key2: number;
}
