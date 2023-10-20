import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedUsersRoles1697762644254 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      insert into users_roles(userId, roleId, createdByUserId, createdAt)
      select u.userId, r.roleId, (select id from users where userName='admin'), current_timestamp()
      from (
        select id as roleId, code as roleCode
        from roles
      ) r
      inner join (
        SELECT id as userId
          , case 
              when username like 'admin%' then 'ADMIN' 
              when username like 'principle%' then 'PRINCIPLE' 
              when username like 'vice_principle%' then 'VICE_PRINCIPLE'
              when username like 'teacher%' then 'TEACHER'
              when username like 'stud%' then 'STUDENT'
            end as roleCode
        FROM users
      ) u on r.roleCode = u.roleCode;
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('delete from users_roles');
  }
}
