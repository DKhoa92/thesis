import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedYearSemesters1697770736465 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      insert into year_semesters(schoolYearId, code, title, isCurrent, startDate, endDate, createdByUserId, createdAt)
      select schoolYearId, code, title
        , case when current_timestamp() between startDate and endDate then true else false end as isCurrent
        , startDate, endDate
        , (select id from users where userName = 'admin') as createdByUserId
        , current_timestamp()
      from (
        select sy.id as schoolYearId
          , concat(t.hk, '_', sy.code) as code
          , concat('Học kỳ ', t.hk, ' ', sy.title) as title
          , case 
          when t.hk = 1 then concat(year(sy.startDate), '-09-05')
          else concat(year(sy.endDate), '-01-15')
          end as startDate
          , case 
          when t.hk = 1 then concat(year(sy.endDate), '-01-11')
          else concat(year(sy.endDate), '-05-24')
          end as endDate
        from school_years sy
        cross join (
          select 1 as hk from dual
          union all
          select 2 as hk from dual
        ) t
      ) tmp
      order by startDate
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('delete from year_semesters');
  }
}
