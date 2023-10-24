import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TrackingTimeAndUserEntity } from '../base/entities/tracking-time-and-user.entity';
import { SchoolYear } from '../school-year/school-year.entity';
import { Grade } from '../grade/grade.entity';
import { User } from '../user/user.entity';

@Entity('classrooms')
export class Classroom extends TrackingTimeAndUserEntity {
    /**
     * Mã khối khi chia, Vd: Lớp 1B thì section là B
     * @example 'B'
     */
    @Column()
    section: string;

    /**
     * Năm học
     */
    @ManyToOne(() => SchoolYear)
    @JoinColumn({ name: 'schoolYearId', referencedColumnName: 'id' })
    schoolYear: SchoolYear;

    /**
     * Bậc học
     */
    @ManyToOne(() => Grade)
    @JoinColumn({ name: 'gradeId', referencedColumnName: 'id' })
    grade: Grade;

    /**
     * Giáo viên chủ nhiệm
     */
    @ManyToOne(() => User)
    @JoinColumn({ name: 'teacherId', referencedColumnName: 'id' })
    teacher: User;
}
