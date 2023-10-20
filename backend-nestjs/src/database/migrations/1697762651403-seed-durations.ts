import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDurations1697762651403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO durations(code, title, valueInMinutes, createdAt)
      WITH RECURSIVE cte AS (
        SELECT 5 as val FROM dual
        UNION ALL
        SELECT val + 5 as val FROM cte
        WHERE val < 120
      )
      SELECT concat(val, '_MINUTES') as code, concat(val, ' phút') as title, val as valueInMintues, current_timestamp() as createdAt
      FROM cte
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('delete from durations');
  }
}
