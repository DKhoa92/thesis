import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedGrades1697762664897 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      insert into grades(code, title, createdAt) values
      ('GRADE_1', 'Lớp 1', current_timestamp()),
      ('GRADE_2', 'Lớp 2', current_timestamp()),
      ('GRADE_3', 'Lớp 3', current_timestamp()),
      ('GRADE_4', 'Lớp 4', current_timestamp()),
      ('GRADE_5', 'Lớp 5', current_timestamp());
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('delete from grades');
  }
}
