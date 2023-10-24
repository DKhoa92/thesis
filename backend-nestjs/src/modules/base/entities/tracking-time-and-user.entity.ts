import { JoinColumn, ManyToOne } from 'typeorm';
import { TrackingTimeEntity } from './tracking-time.entity';
import { User } from 'src/modules/user/user.entity';

export class TrackingTimeAndUserEntity extends TrackingTimeEntity {
    /**
     * Người tạo
     */
    @ManyToOne(() => User)
    @JoinColumn({ name: 'createdByUserId', referencedColumnName: 'id' })
    createdBy: User;

    /**
     * Người cập nhật cuối cùng
     */
    @ManyToOne(() => User)
    @JoinColumn({ name: 'lastUpdatedByUserId', referencedColumnName: 'id' })
    lastUpdatedBy: User;
}
