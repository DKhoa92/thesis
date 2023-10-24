import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

export class TrackingTimeEntity extends BaseEntity {
    /**
     * Thời điểm tạo
     * @example '2023-01-01 12:00:00'
     */
    @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP()' })
    createdAt: Date;

    /**
     * Thời cập nhật cuối cùng
     * @example '2023-01-01 12:00:00'
     */
    @UpdateDateColumn({
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP()',
        onUpdate: 'CURRENT_TIMESTAMP()',
    })
    lastUpdatedAt: Date;
}
