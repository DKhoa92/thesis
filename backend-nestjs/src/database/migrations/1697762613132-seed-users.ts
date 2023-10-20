import { MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '../../modules/user/user.entity';
import { fakerVI as faker, SexType } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';
import { AvatarGenderType, genAvatarUrl } from '../../modules/base/utils/avatar.util';

faker.seed(parseInt(process.env.FAKER_SEED_NUMBER));
const NUMER_OF_TEACHER_USERS_FAKE_GENERATE = 10;
const NUMER_OF_STUDENT_USERS_FAKE_GENERATE = 120;
const STUDENT_BIRTH_YEARS = [2017, 2016, 2015, 2014, 2013];

export class SeedUsers1697762613132 implements MigrationInterface {
  private async fakeUserInfo(username, birthDate: Date): Promise<Omit<User, 'id'>> {
    const person = faker.person;
    const location = faker.location;
    const password = await bcrypt.hash(username, +process.env.ENCRYPT_BCRYPT_SALT_OR_ROUNDS);
    const sexType = person.sex() as SexType;
    const isMale = sexType === 'male';
    return {
      userName: username,
      password: password,
      email: `${username}@example.com`,
      firstName: person.firstName(sexType),
      lastName: person.lastName(sexType),
      isMale,
      birthDate,
      phoneNumber: faker.phone.number(),
      address: `${location.streetAddress()}, ${location.city()}`,
      avatar: genAvatarUrl(username, isMale ? AvatarGenderType.MALE : AvatarGenderType.FEMALE),
      createdAt: new Date(),
      lastUpdatedAt: null,
    };
  }

  private async generateUsers() {
    /** Admin, Hiệu trưởng, Phó Hiệu trưởng */
    const specials = await Promise.all(
      ['ADMIN', 'PRINCIPLE', 'VICE_PRINCIPLE'].map((role) => {
        const username = (() => {
          switch (role) {
            case 'ADMIN':
              return 'admin';
            case 'PRINCIPLE':
              return 'principle';
            case 'VICE_PRINCIPLE':
              return 'vice_principle';
            default:
              return null;
          }
        })();
        return this.fakeUserInfo(username, faker.date.birthdate({ min: 27, max: 50, mode: 'age' }));
      }),
    );

    /** Giáo viên */
    const teachers = await Promise.all(
      Array.from(
        { length: NUMER_OF_TEACHER_USERS_FAKE_GENERATE },
        async (_, i) =>
          await this.fakeUserInfo(
            `teacher${i + 1}`,
            faker.date.birthdate({
              min: 27,
              max: 50,
              mode: 'age',
            }),
          ),
      ),
    );

    /** Học sinh */
    const studentsPromises = [];
    let idx = 1;
    for (const year of STUDENT_BIRTH_YEARS) {
      studentsPromises.push(
        ...Array.from(
          { length: NUMER_OF_STUDENT_USERS_FAKE_GENERATE },
          async () =>
            await this.fakeUserInfo(
              `stud${idx++}`,
              faker.date.birthdate({ min: year, max: year, mode: 'year' }),
            ),
        ),
      );
    }
    const students = (await Promise.all(studentsPromises)) as Array<Omit<User, 'id'>>;

    return [...specials, ...teachers, ...students];
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    const users = await this.generateUsers();
    const sqlInsert =
      'insert into users(userName, password, email, firstName, lastName, isMale, birthDate, phoneNumber, address, avatar, createdAt) values\n';
    const sqlValues = users
      .map(
        (user) =>
          `('${user.userName}', '${user.password}', '${user.email}', '${user.firstName}', '${
            user.lastName
          }', ${user.isMale ? 'true' : 'false'}, '${
            user.birthDate.toISOString().split('T')[0]
          }', '${user.phoneNumber}', '${user.address}', '${user.avatar}', current_timestamp())`,
      )
      .join(',\n');
    await queryRunner.query(sqlInsert + sqlValues);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('delete from users');
  }
}
