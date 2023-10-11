import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { User } from '../user/user.entity';
import { Role } from '../role/role.entity';

@Entity('users_roles')
export class UserRole {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  @AutoMap()
  user: string;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'roleId', referencedColumnName: 'id' })
  @AutoMap()
  role: string;

  @Column()
  @AutoMap()
  createdAt: Date;

  @Column()
  @AutoMap()
  lastUpdatedAt: Date;
}
