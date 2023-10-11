import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

const TABLE_NAME = 'year_semesters';

export class CreateYearSemesters1697352745000 implements MigrationInterface {
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
            name: 'schoolYearId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which school year this class belongs to',
          },
          {
            name: 'code',
            type: 'varchar',
            length: '100',
            isNullable: false,
            isUnique: true,
            comment: 'Text identifier used for searching',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '250',
            isNullable: false,
            comment: 'The name of year',
          },
          {
            name: 'isCurrent',
            type: 'boolean',
            isNullable: false,
            comment: 'Determines whether it is the current school year or not',
          },
          {
            name: 'startDate',
            type: 'date',
            isNullable: false,
            comment: 'The start date',
          },
          {
            name: 'endDate',
            type: 'date',
            isNullable: false,
            comment: 'The end date',
          },
          {
            name: 'createdByUserId',
            type: 'bigint',
            isNullable: false,
            comment: 'Tracking created time',
          },
          {
            name: 'lastUpdatedByUserId',
            type: 'bigint',
            isNullable: true,
            comment: 'Tracking updated time',
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
        columnNames: ['schoolYearId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'school_years',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['createdByUserId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['lastUpdatedByUserId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLE_NAME, true, true, true);
  }
}
