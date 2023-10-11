import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export class UsersRolesSeeder implements Seeder {
  track = false;

  public async run(dataSource: DataSource): Promise<any> {
    const results = await dataSource.createQueryRunner().manager.query(`
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
    console.log(results.info);
  }
}
