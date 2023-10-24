import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AUTH_ROLES_KEY } from './auth.decorator';
import { REQUEST_AUTH_INFO_KEY } from './auth.guard';
import { JwtPayload } from './auth.dto';
import { RoleEnum } from '../base/enums/role.enum';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const allowRoles = this.reflector.getAllAndOverride<RoleEnum[]>(AUTH_ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
            ]);
            if (allowRoles.length === 0) {
                return true;
            }

            const roles = (context.switchToHttp().getRequest()[REQUEST_AUTH_INFO_KEY] as JwtPayload)
                .roles;

            console.log(allowRoles, roles);
            return allowRoles.some((allowRole) => {
                return roles.indexOf(allowRole) !== -1;
            });
        } catch {
            throw new ForbiddenException();
        }
    }
}
