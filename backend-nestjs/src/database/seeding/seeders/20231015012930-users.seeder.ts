import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { fakerVI as faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';
import { User } from '../../../modules/user/user.entity';

faker.seed(parseInt(process.env.FAKER_SEED_NUMBER));
const NUMER_OF_TEACHER_USERS_FAKE_GENERATE = 10;
const NUMER_OF_STUDENT_USERS_FAKE_GENERATE = 100;

export class UsersSeeder implements Seeder {
  track = false;

  private async fakeUserInfo(username, birthDate: Date): Promise<Omit<User, 'id'>> {
    const person = faker.person;
    const location = faker.location;
    const password = await bcrypt.hash(username, +process.env.ENCRYPT_BCRYPT_SALT_OR_ROUNDS);
    return {
      userName: username,
      password: password,
      email: `${username}@example.com`,
      firstName: person.firstName(),
      lastName: person.lastName(),
      isMale: person.sex() === 'male',
      birthDate,
      phoneNumber: faker.phone.number(),
      address: `${location.streetAddress()}, ${location.city()}`,
      createdAt: new Date(),
      lastUpdatedAt: null,
    };
  }

  public async run(dataSource: DataSource): Promise<any> {
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
    const students = await Promise.all(
      Array.from(
        { length: NUMER_OF_STUDENT_USERS_FAKE_GENERATE },
        async (_, i) =>
          await this.fakeUserInfo(
            `stud${i + 1}`,
            faker.date.birthdate({ min: 6, max: 10, mode: 'age' }),
          ),
      ),
    );

    /** Insert vào database */
    const repository = dataSource.getRepository(User);
    await repository.insert([...specials, ...teachers, ...students]);
  }
}
