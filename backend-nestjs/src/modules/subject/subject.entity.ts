import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TrackingTimeEntity } from '../base/entities/tracking-time.entity';
import { Grade } from '../grade/grade.entity';

@Entity('subjects')
export class Subject extends TrackingTimeEntity {
    /**
     * Tên hiển thị
     * @example 'Tiếng Việt (Lớp 5)'
     */
    @Column()
    title: string;

    /**
     * Mô tả (không bắt buộc)
     */
    @Column()
    description: string;

    /**
     * Bậc học
     */
    @ManyToOne(() => Grade)
    @JoinColumn({ name: 'gradeId', referencedColumnName: 'id' })
    grade: Grade;
}
