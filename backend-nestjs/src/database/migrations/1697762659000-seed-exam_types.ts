import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedExamTypes1697762659000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      insert into exam_types(code, title, createdByUserId, createdAt) values
      ('MIDTERM', 'Thi giữa kỳ', (select id from users where userName = 'admin'), current_timestamp()),
      ('FINAL', 'Thi cuối kỳ', (select id from users where userName = 'admin'), current_timestamp())
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('delete from exam_types');
  }
}
