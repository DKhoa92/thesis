import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export class PeriodsSeeder implements Seeder {
  track = false;

  public async run(dataSource: DataSource): Promise<any> {
    const results = await dataSource.createQueryRunner().manager.query(`
      insert into periods(code, title, startAt, durationId, createdAt)
      select 'BREAKFAST', 'Ăn sáng', '07:30:00', (select id from durations where valueInMinutes = 20), current_timestamp() from dual
      union all
      select 'SESSION_1', 'Tiết 1', '08:00:00', (select id from durations where valueInMinutes = 35), current_timestamp() from dual
      union all
      select 'SESSION_2', 'Tiết 2', '08:40:00', (select id from durations where valueInMinutes = 35), current_timestamp() from dual
      union all
      select 'SESSION_3', 'Tiết 3', '09:20:00', (select id from durations where valueInMinutes = 35), current_timestamp() from dual
      union all
      select 'BREAK', 'Giải lao', '09:55:00', (select id from durations where valueInMinutes = 15), current_timestamp() from dual
      union all
      select 'SESSION_4', 'Tiết 4', '10:10:00', (select id from durations where valueInMinutes = 35), current_timestamp() from dual
      union all
      select 'SESSION_5', 'Tiết 5', '10:50:00', (select id from durations where valueInMinutes = 35), current_timestamp() from dual
      union all
      select 'LUNCH', 'Ăn trưa', '11:25:00', (select id from durations where valueInMinutes = 45), current_timestamp() from dual
      union all
      select 'NAP', 'Ngủ trưa', '12:10:00', (select id from durations where valueInMinutes = 80), current_timestamp() from dual
      union all
      select 'SESSION_6', 'Tiết 6', '13:35:00', (select id from durations where valueInMinutes = 35), current_timestamp() from dual
      union all
      select 'SESSION_7', 'Tiết 7', '14:15:00', (select id from durations where valueInMinutes = 35), current_timestamp() from dual
      union all
      select 'TEA', 'Ăn chiều', '14:50:00', (select id from durations where valueInMinutes = 15), current_timestamp() from dual
      union all
      select 'SESSION_8', 'Tiết 8', '15:10:00', (select id from durations where valueInMinutes = 35), current_timestamp() from dual
      union all
      select 'AFTER_HOURS_SUPPORT', 'Hỗ trợ sau giờ', '15:45:00', (select id from durations where valueInMinutes = 15), current_timestamp() from dual
    `);
    console.log(results.info);
  }
}
