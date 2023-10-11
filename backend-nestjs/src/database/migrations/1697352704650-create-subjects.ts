import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

const TABLE_NAME = 'subjects';

export class CreateSubjects1697352704650 implements MigrationInterface {
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
            name: 'gradeId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which grade this subject belongs to',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '200',
            isNullable: false,
            isUnique: true,
            comment: 'The name of subject',
          },
          {
            name: 'description',
            type: 'varchar',
            length: '250',
            isNullable: true,
            comment: 'The description of subject',
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

    /**
     * Create table foreign key
     * */
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['gradeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'grades',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLE_NAME, true, true, true);
  }
}
