import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import { RolesSeeder } from './20231015012900-roles.seeder';
import { UsersRolesSeeder } from './20231015013000-users_roles.seeder';
import { UsersSeeder } from './20231015012930-users.seeder';
import { GradesSeeder } from './20231018162600-grades.seeder';
import { SubjectsSeeder } from './20231018162800-subjects.seeder';
import { SchoolYearsSeeder } from './20231018170700-school_years.seeder';

export class MainSeeder implements Seeder {
  track = false;

  public async run(dataSource: DataSource): Promise<any> {
    // await runSeeder(dataSource, RolesSeeder);
    // await runSeeder(dataSource, UsersSeeder);
    // await runSeeder(dataSource, UsersRolesSeeder);
    // await runSeeder(dataSource, GradesSeeder);
    // await runSeeder(dataSource, SubjectsSeeder);
    await runSeeder(dataSource, SchoolYearsSeeder);
  }
}
