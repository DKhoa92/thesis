import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Role } from '../role/role.entity';

@Entity('users_roles')
export class UserRole {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'roleId', referencedColumnName: 'id' })
  role: Role;

  @Column()
  createdAt: Date;

  @Column()
  lastUpdatedAt: Date;
}
