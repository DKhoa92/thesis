import { Column, Entity } from 'typeorm';
import { TrackingTimeAndUserEntity } from '../base/entities/tracking-time-and-user.entity';

@Entity('school_years')
export class SchoolYear extends TrackingTimeAndUserEntity {
    /**
     * Mã
     * @example '2018_2019'
     */
    @Column()
    code: string;

    /**
     * Tên hiển thị
     * @example 'Năm học 2018 - 2019'
     */
    @Column()
    title: string;

    /**
     * Cho biết có phải là năm học hiện hành
     * @example true
     */
    @Column()
    isCurrent: boolean;

    /**
     * Ngày bắt đầu
     * @example '2018-09-01'
     */
    @Column('date')
    startDate: Date;

    /**
     * Ngày kết thúc
     * @example '2019-06-01'
     */
    @Column('date')
    endDate: Date;
}
