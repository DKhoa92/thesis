import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SchoolYear } from '../school-year/school-year.entity';
import { User } from '../user/user.entity';

@Entity('classrooms')
export class Classroom {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SchoolYear)
  @JoinColumn({ name: 'schoolYearId', referencedColumnName: 'id' })
  schoolYear: SchoolYear;

  @Column()
  grade: string;

  @Column()
  section: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'teacherId', referencedColumnName: 'id' })
  teacher: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  lastUpdatedAt: Date;
}
