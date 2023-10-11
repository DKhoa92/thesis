import { AutoMap } from '@automapper/classes';

export class UserRspDto {
  @AutoMap()
  id: number;

  @AutoMap()
  userName: string;

  @AutoMap()
  email: string;

  @AutoMap()
  role: string;

  @AutoMap()
  firstName: string;

  @AutoMap()
  lastName: string;

  @AutoMap()
  gender: string;

  @AutoMap()
  phoneNumber: string;

  @AutoMap()
  address: string;

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  lastUpdatedAt: Date;
}
