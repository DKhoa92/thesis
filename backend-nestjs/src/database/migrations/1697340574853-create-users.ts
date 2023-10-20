import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const TABLE_NAME = 'users';

export class CreateUsers1697340574853 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    /**
     * Create table
     * */
    await queryRunner.createTable(
      new Table({
        name: TABLE_NAME,
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            comment: 'The ID',
          },
          {
            name: 'userName',
            type: 'varchar',
            length: '100',
            isNullable: false,
            isUnique: true,
            comment: 'The username',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '250',
            isNullable: false,
            comment: 'The password',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '100',
            isNullable: false,
            isUnique: true,
            comment: 'The email',
          },
          {
            name: 'firstName',
            type: 'varchar',
            length: '100',
            isNullable: false,
            comment: 'The firstname',
          },
          {
            name: 'lastName',
            type: 'varchar',
            length: '100',
            isNullable: false,
            comment: 'The lastname',
          },
          {
            name: 'isMale',
            type: 'boolean',
            isNullable: false,
            comment: 'The gender',
          },
          {
            name: 'birthDate',
            type: 'date',
            isNullable: true,
            comment: 'The birth date',
          },
          {
            name: 'phoneNumber',
            type: 'varchar',
            length: '100',
            isNullable: true,
            comment: 'The phone number',
          },
          {
            name: 'address',
            type: 'varchar',
            length: '250',
            isNullable: true,
            comment: 'The address',
          },
          {
            name: 'avatar',
            type: 'varchar',
            length: '1000',
            isNullable: true,
            comment: 'The avatar url',
          },
          {
            name: 'createdAt',
            type: 'datetime',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP',
            comment: 'Tracking created time',
          },
          {
            name: 'lastUpdatedAt',
            type: 'datetime',
            isNullable: true,
            comment: 'Tracking updated time',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLE_NAME, true, true, true);
  }
}
