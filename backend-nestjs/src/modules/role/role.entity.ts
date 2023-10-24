import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TrackingTimeEntity } from '../base/entities/tracking-time.entity';

@Entity('roles')
export class Role extends TrackingTimeEntity {
    /**
     * Mã
     * @example 'ADMIN'
     */
    @Column()
    code: string;

    /**
     * Tên hiển thị
     * @example 'Quản trị viên'
     */
    @Column()
    title: string;

    /**
     * Mô tả
     */
    @Column()
    description: string;
}
