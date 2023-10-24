import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../role/role.entity';
import { IsNotEmpty } from 'class-validator';


@Entity('users')
export class User {
  /**
   * ID
   * @example '1'
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Username
   * @example 'user01'
   */
  @Column()
  @IsNotEmpty()
  userName: string;

  /**
   * Email
   * @example 'user01@example.com'
   */
  @Column()
  @IsNotEmpty()
  email: string;

  /**
   * Mật khẩu
   */
  @Column()
  @IsNotEmpty()
  password: string;

  /**
   * Tên lót và tên
   * @example 'Việt Huy'
   */
  @Column()
  @IsNotEmpty()
  firstName: string;

  /**
   * Họ
   * @example 'Dương'
   */
  @Column()
  @IsNotEmpty()
  lastName: string;

  /**
   * Giới tính
   * @example true
   */
  @Column()
  @IsNotEmpty()
  isMale: boolean;

  /**
   * Ngày tháng năm sinh
   * @example '1990-01-01'
   */
  @Column()
  @IsNotEmpty()
  birthDate: Date;

  /**
   * Số điện thoại
   * @example '025 8782 0208'
   */
  @Column()
  phoneNumber: string;

  /**
   * Địa chỉ
   * @example '93863 Quốc Mỹ Corner, Hải Dương'
   */
  @Column()
  address: string;

  /**
   * URL ảnh đại diện
   * @example 'https://api.dicebear.com/7.x/avataaars/svg?seed=teacher1&backgroundColor=b6e3f4&accessories=round,prescription01,prescription02,wayfarers,kurt,sunglasses&accessoriesProbability=20&clothing=shirtCrewNeck,shirtScoopNeck,shirtVNeck,graphicShirt,collarAndSweater,blazerAndSweater,blazerAndShirt,hoodie&eyebrows=defaultNatural,flatNatural,frownNatural,raisedExcited,default,raisedExcitedNatural&eyes=surprised,default,squint&facialHair[]&facialHairColor[]&facialHairProbability=0&hairColor=2c1b18,724133,a55728,4a312c,b58143,c93305,ecdcbf,f59797&hatColor=25557c,5199e4,a7ffc4,b1e2ff,e6e6e6,ff488e,ff5c5c,262e33,3c4f5c,65c9ff,929598,ffafb9,ffdeb5,ffffb1,ffffff&mouth=smile&skinColor=edb98a,ffdbb4,d08b5b,fd9841&top=bigHair,bob,bun,curly,curvy,dreads,frida,fro,froBand,longButNotTooLong,miaWallace,shavedSides,straight01,straight02,straightAndStrand'
   */
  @Column()
  avatar: string;

  /**
   * Thời điểm tạo
   * @example '2023-01-01 12:00:00'
   */
  @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP()' })
  createdAt: Date;

  /**
   * Thời cập nhật cuối cùng
   * @example '2023-01-01 12:00:00'
   */
  @UpdateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP()',
    onUpdate: 'CURRENT_TIMESTAMP()',
  })
  lastUpdatedAt: Date;

  /**
   * Danh sách các role
   */
  @ManyToMany(() => Role)
  @JoinTable({
    name: 'users_roles',
    joinColumn: { name: 'userId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'roleId', referencedColumnName: 'id' },
  })
  roles?: Role[];
}
