import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedRoles1697761059223 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      insert into roles(code, title, createdAt) values
      ('ADMIN', 'Quản trị viên', current_timestamp()),
      ('PRINCIPLE', 'Hiệu trưởng', current_timestamp()),
      ('VICE_PRINCIPLE', 'Phó Hiệu trưởng', current_timestamp()),
      ('TEACHER', 'Giáo viên', current_timestamp()),
      ('STUDENT', 'Học sinh', current_timestamp());
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('delete from roles');
  }
}
