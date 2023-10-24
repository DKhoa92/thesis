import { Column, Entity } from 'typeorm';
import { TrackingTimeEntity } from '../base/entities/tracking-time.entity';

@Entity('periods')
export class ExampType extends TrackingTimeEntity {
    /**
     * Mã
     * @example 'GRADE_1'
     */
    @Column()
    code: string;

    /**
     * Tên hiển thị
     * @example 'Lớp 1'
     */
    @Column()
    title: string;
}
