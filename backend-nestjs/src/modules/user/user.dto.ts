import { IsNotEmpty, IsNumber, IsString, Length, Max, Min } from 'class-validator';
import { OmitType, PickType } from '@nestjs/swagger';
import { User } from './user.entity';

export class UserRspDto extends PickType(User, [
    'id',
    'userName',
    'email',
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

export class UserShortRspDto extends PickType(User, [
    'id',
    'userName',
    'email',
    'firstName',
    'lastName',
    'avatar',
] as const) {
    static fields(): string[] {
        return ['id', 'userName', 'email', 'firstName', 'lastName', 'avatar'];
    }
}
