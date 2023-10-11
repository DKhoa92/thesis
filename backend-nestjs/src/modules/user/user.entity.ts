import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { Role } from '../role/role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column()
  @AutoMap()
  userName: string;

  @Column()
  @AutoMap()
  email: string;

  @Column()
  @AutoMap()
  password: string;

  @Column()
  @AutoMap()
  firstName: string;

  @Column()
  @AutoMap()
  lastName: string;

  @Column()
  @AutoMap()
  isMale: boolean;

  @Column()
  @AutoMap()
  birthDate: Date;

  @Column()
  @AutoMap()
  phoneNumber: string;

  @Column()
  @AutoMap()
  address: string;

  @Column()
  @AutoMap()
  createdAt: Date;

  @Column()
  @AutoMap()
  lastUpdatedAt: Date;

  @ManyToMany(() => Role)
  @JoinTable({
    name: 'users_roles',
    joinColumn: { name: 'userId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'roleId', referencedColumnName: 'id' },
  })
  roles?: Role[];
}
