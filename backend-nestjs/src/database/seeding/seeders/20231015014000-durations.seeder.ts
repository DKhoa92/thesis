import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export class DurationsSeeder implements Seeder {
  track = false;

  public async run(dataSource: DataSource): Promise<any> {
    const results = await dataSource.createQueryRunner().manager.query(`
      INSERT INTO online_exam.durations(code, title, valueInMinutes, createdAt)
      WITH RECURSIVE cte AS (
        SELECT 5 as val FROM dual
        UNION ALL
        SELECT val + 5 as val FROM cte
        WHERE val < 120
      )
      SELECT concat(val, '_MINUTES') as code, concat(val, ' phút') as title, val as valueInMintues, current_timestamp() as createdAt
      FROM cte
    `);
    console.log(results.info);
  }
}
