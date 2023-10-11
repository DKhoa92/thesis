import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('all_codes')
export class AllCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    comment: 'The type',
  })
  type: string;

  @Column({
    type: 'varchar',
    length: 100,
    comment: 'The code key',
  })
  codeKey: string;

  @Column({
    type: 'varchar',
    length: 200,
    comment: 'The value display as vietnamese',
  })
  valueVi: string;

  @Column({
    type: 'varchar',
    length: 200,
    comment: 'The value display as english',
  })
  valueEn: string;

  @Column({
    type: 'datetime',
    nullable: false,
    comment: 'Tracking created time',
  })
  createdAt: Date;

  @Column({
    type: 'datetime',
    nullable: true,
    comment: 'Tracking updated time',
  })
  lastUpdatedAt: Date;
}
