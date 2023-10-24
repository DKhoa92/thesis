import { PickType } from '@nestjs/swagger';
import { SchoolYear } from './school-year.entity';
import { UserShortRspDto } from '../user/user.dto';

export class SchoolYearRspDto extends PickType(SchoolYear, [
    'id',
    'code',
    'title',
    'isCurrent',
    'startDate',
    'endDate',
    'createdAt',
    'lastUpdatedAt',
] as const) {
    /**
     * Người tạo
     */
    createdBy: UserShortRspDto;

    /**
     * Người cập nhật cuối cùng
     */
    lastUpdatedBy: UserShortRspDto;
}

export class SchoolYearShortRspDto extends PickType(SchoolYear, ['id', 'code', 'title'] as const) {
    static fields(): string[] {
        return ['id', 'code', 'title'];
    }
}
