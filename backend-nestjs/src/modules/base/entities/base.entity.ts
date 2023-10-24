import { PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
    /**
     * ID
     * @example '1'
     */
    @PrimaryGeneratedColumn()
    id: number;
}
