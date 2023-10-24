import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TrackingTimeAndUserEntity } from '../base/entities/tracking-time-and-user.entity';
import { SchoolYear } from '../school-year/school-year.entity';

@Entity('year_semesters')
export class Semester extends TrackingTimeAndUserEntity {
    /**
     * Mã
     * @example '1_2018_2019'
     */
    @Column()
    code: string;

    /**
     * Tên hiển thị
     * @example 'Học kỳ 1 Năm học 2018 - 2019'
     */
    @Column()
    title: string;

    /**
     * Cho biết có phải là học kỳ hiện hành
     * @example false
     */
    @Column()
    isCurrent: boolean;

    /**
     * Ngày bắt đầu
     * @example '2018-09-05'
     */
    @Column('date')
    startDate: Date;

    /**
     * Ngày kết thúc
     * @example '2019-01-11'
     */
    @Column('date')
    endDate: Date;

    /**
     * Năm học
     */
    @ManyToOne(() => SchoolYear)
    @JoinColumn({ name: 'schoolYearId', referencedColumnName: 'id' })
    schoolYear: SchoolYear;
}
