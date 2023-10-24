import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TrackingTimeAndUserEntity } from '../base/entities/tracking-time-and-user.entity';
import { User } from '../user/user.entity';
import { Classroom } from '../classroom/classroom.entity';

@Entity('classrooms_students')
export class ClassroomStudent extends TrackingTimeAndUserEntity {
    /**
     * Lớp học
     */
    @ManyToOne(() => Classroom)
    @JoinColumn({ name: 'classroomId', referencedColumnName: 'id' })
    classroom: Classroom;

    /**
     * Học sinh
     */
    @ManyToOne(() => User)
    @JoinColumn({ name: 'studentId', referencedColumnName: 'id' })
    student: User;
}
