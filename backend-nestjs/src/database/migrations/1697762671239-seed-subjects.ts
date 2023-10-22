import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedSubjects1697762671239 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      insert into subjects(gradeId, title, createdAt)
      select (select id from grades where code = t2.gradeCode) as gradeId, concat(t1.subjectTitle, ' (', t2.suffix, ')') as subjectTitle, current_timestamp()
      from (
        select 'Tiếng Việt' as subjectTitle
        union all
        select 'Toán' as subjectTitle
        union all
        select 'Đạo Đức' as subjectTitle
        union all
        select 'Tự nhiên và xã hội' as subjectTitle
        union all
        select 'Khoa học' as subjectTitle
        union all
        select 'Lịch sử' as subjectTitle
        union all
        select 'Địa lý' as subjectTitle
        union all
        select 'Âm nhạc' as subjectTitle
        union all
        select 'Mỹ thuật' as subjectTitle
        union all
        select 'Thể dục' as subjectTitle
      ) t1 cross join (
        select 'Lớp 1' as suffix, 'GRADE_1' as gradeCode
        union all
        select 'Lớp 2' as suffix, 'GRADE_2' as gradeCode
        union all
        select 'Lớp 3' as suffix, 'GRADE_3' as gradeCode
        union all
        select 'Lớp 4' as suffix, 'GRADE_4' as gradeCode
        union all
        select 'Lớp 5' as suffix, 'GRADE_5' as gradeCode
      ) t2;
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('delete from subjects');
  }
}