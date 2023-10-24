import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedClassrooms1697773551028 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        insert into classrooms(schoolYearId, gradeId, section, teacherId, createdByUserId, createdAt)
        with recursive cte(schoolYearId, gradeId, cnt) as (
            select schoolYearId, gradeId, count(studentId) as cnt
            from (
                select sy.schoolYearId, s.studentId
                , (select id from grades where code = concat('GRADE_', sy.startYear - s.birthYear - 5)) as gradeId
                from (
                    select id as schoolYearId, year(startDate) startYear from school_years
                ) sy
                cross join (
                    select id as studentId, year(birthDate) as birthYear from users where userName like 'stud%'
                ) s on sy.startYear - s.birthYear between 6 and 10
            ) tmp
            group by schoolYearId, gradeId
            union all
            select schoolYearId, gradeId, cnt - 30
            from cte
            where cnt - 30 > 0
        ), t as (
            select id as teacherId, row_number() over (order by id) as rn
            from users
            where userName like 'teacher%'
        )
        select schoolYearId, gradeId, section, t.teacherId, (select id from users where userName = 'admin'), current_timestamp()
        from (
            select schoolYearId, gradeId, section, row_number() over (partition by schoolYearId order by schoolYearId, gradeId, section) as rn
            from (
                select schoolYearId, gradeId, char(row_number() over (partition by schoolYearId, gradeId order by schoolYearId, gradeId) + 64 using utf8mb4) as section
            from cte
            ) c
        ) c
        left join t on t.rn = mod(c.rn - 1, (select count(*) from t)) + 1
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('delete from classrooms');
    }
}
