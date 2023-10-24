import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtPayload, LoginRspDto } from './auth.dto';
import { RoleEnum } from '../base/enums/role.enum';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {}

    async login(username, password): Promise<LoginRspDto> {
        const user = await this.userService.findOne({
            where: { userName: username },
            relations: { roles: true },
        });
        if (!user) {
            throw new UnauthorizedException(null, 'Username does not exists');
        }
        if (!(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException(null, 'Wrong password');
        }

        const authInfo: JwtPayload = {
            sub: user.userName,
            userName: user.userName,
            email: user.email,
            avatar: user.avatar,
            firstName: user.firstName,
            lastName: user.lastName,
            roles: user.roles.map((role) => role.code as RoleEnum),
        };

        return {
            authInfo,
            accessToken: await this.jwtService.signAsync(authInfo),
        };
    }
}
