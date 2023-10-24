import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { RoleEnum } from '../base/enums/role.enum';

export const AUTH_ROLES_KEY = 'roles';

/**
 * Nếu list roles truyền vào là rỗng thì sẽ không kiểm tra role (chỉ cần có đăng nhập)
 * */
export function MustAuthAndHasAnyRoleIn(...roles: RoleEnum[]) {
    return applyDecorators(
        SetMetadata(AUTH_ROLES_KEY, roles),
        UseGuards(AuthGuard, RoleGuard),
        ApiBearerAuth(),
        // ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    );
}
