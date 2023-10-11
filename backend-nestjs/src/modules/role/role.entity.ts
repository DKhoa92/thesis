import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column()
  @AutoMap()
  code: string;

  @Column()
  @AutoMap()
  title: string;

  @Column()
  @AutoMap()
  description: string;

  @Column()
  @AutoMap()
  createdAt: Date;

  @Column()
  @AutoMap()
  lastUpdatedAt: Date;
}
