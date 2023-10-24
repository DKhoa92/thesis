import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TrackingTimeEntity } from '../base/entities/tracking-time.entity';
import { Duration } from '../duration/duration.entity';

@Entity('periods')
export class Period extends TrackingTimeEntity {
    /**
     * Mã
     * @example 'SESSION_1'
     */
    @Column()
    code: string;

    /**
     * Tên hiển thị
     * @example 'Tiết 1'
     */
    @Column()
    title: string;

    /**
     * Thời gian bắt đầu (format: 'HH:mm:ss')
     * @example '08:00:00'
     */
    @Column('time')
    startAt: Date;

    /**
     * Thời lượng
     */
    @ManyToOne(() => Duration)
    @JoinColumn({ name: 'durationId', referencedColumnName: 'id' })
    duration: Duration;
}
