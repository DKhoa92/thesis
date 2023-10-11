import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export class RolesSeeder implements Seeder {
  track = false;

  public async run(dataSource: DataSource): Promise<any> {
    const results = await dataSource.createQueryRunner().manager.query(`
      insert into roles(code, title, createdAt) values
      ('ADMIN', 'Quản trị viên', current_timestamp()),
      ('PRINCIPLE', 'Hiệu trưởng', current_timestamp()),
      ('VICE_PRINCIPLE', 'Phó Hiệu trưởng', current_timestamp()),
      ('TEACHER', 'Giáo viên', current_timestamp()),
      ('STUDENT', 'Học sinh', current_timestamp());
    `);
    console.log(results.info);
  }
}
