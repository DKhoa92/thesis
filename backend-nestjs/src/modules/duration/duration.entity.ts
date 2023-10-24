import { Column, Entity } from 'typeorm';
import { TrackingTimeEntity } from '../base/entities/tracking-time.entity';

@Entity('durations')
export class Duration extends TrackingTimeEntity {
    /**
     * Mã
     * @example '5_MINUTES'
     */
    @Column()
    code: string;

    /**
     * Tên hiển thị
     * @example '5 phút'
     */
    @Column()
    title: string;

    /**
     * Số phút (giá trị ở dạng số)
     * @example 5
     */
    @Column()
    valueInMinutes: string;
}
