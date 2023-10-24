import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedClassroomsStudents1698130109923 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into classrooms_students(classroomId, studentId, createdByUserId, createdAt)
            with s as (
                select schoolYearId, gradeId, studentId, row_number() over (partition by schoolYearId, gradeId order by studentId) as rn
                from (
                    select sy.schoolYearId, s.studentId
                    , (select id from grades where code = concat('GRADE_', sy.startYear - s.birthYear - 5)) as gradeId
                    from (
                        select id as schoolYearId, year(startDate) startYear from school_years
                    ) sy
                    cross join (
                        select id as studentId, year(birthDate) as birthYear from users where userName like 'stud%'
                    ) s on sy.startYear - s.birthYear between 6 and 10
                ) t
            ), c as (
                select schoolYearId, gradeId, id as classroomId, section, row_number() over (partition by schoolYearId, gradeId order by section) as rn
                from classrooms
            )
            select c.classroomId, s.studentId, (select id from users where userName = 'admin'), current_timestamp()
            from s
            inner join c on s.schoolYearId = c.schoolYearId and s.gradeId = c.gradeId and floor((s.rn - 1)/30) + 1 = c.rn        
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('delete from classrooms_students');
    }
}
