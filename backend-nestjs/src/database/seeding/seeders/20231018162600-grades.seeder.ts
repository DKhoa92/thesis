import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export class GradesSeeder implements Seeder {
  track = false;

  public async run(dataSource: DataSource): Promise<any> {
    const results = await dataSource.createQueryRunner().manager.query(`
      insert into grades(code, title, createdAt) values
      ('GRADE_1', 'Lớp 1', current_timestamp()),
      ('GRADE_2', 'Lớp 2', current_timestamp()),
      ('GRADE_3', 'Lớp 3', current_timestamp()),
      ('GRADE_4', 'Lớp 4', current_timestamp()),
      ('GRADE_5', 'Lớp 5', current_timestamp());
    `);
    console.log(results.info);
  }
}
