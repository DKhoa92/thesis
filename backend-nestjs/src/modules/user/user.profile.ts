import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { User } from './user.entity';
import { UserRspDto } from './user-rsp.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, User, UserRspDto);
    };
  }
}
