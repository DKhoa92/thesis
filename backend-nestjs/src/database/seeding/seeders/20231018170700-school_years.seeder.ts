import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export class SchoolYearsSeeder implements Seeder {
  track = false;

  public async run(dataSource: DataSource): Promise<any> {
    const results = await dataSource.createQueryRunner().manager.query(`
      insert into school_years(code, title, isCurrent, startDate, endDate, createdAt, createdByUserId) values
      ('2018_2019', 'Năm học 2018 - 2019', false, '2018-09-01', '2019-06-01', '2018-01-01 00:00:00', (select id from users where userName='admin')),
      ('2019_2020', 'Năm học 2019 - 2020', false, '2019-09-01', '2020-06-01', '2019-01-01 00:00:00', (select id from users where userName='admin')),
      ('2020_2021', 'Năm học 2020 - 2021', false, '2020-09-01', '2021-06-01', '2020-01-01 00:00:00', (select id from users where userName='admin')),
      ('2021_2022', 'Năm học 2021 - 2022', false, '2021-09-01', '2022-06-01', '2021-01-01 00:00:00', (select id from users where userName='admin')),
      ('2022_2023', 'Năm học 2022 - 2023', false, '2022-09-01', '2023-06-01', '2022-01-01 00:00:00', (select id from users where userName='admin')),
      ('2023_2024', 'Năm học 2023 - 2024', true, '2023-09-01', '2024-06-01', '2023-01-01 00:00:00', (select id from users where userName='admin'));
    `);
    console.log(results.info);
  }
}
