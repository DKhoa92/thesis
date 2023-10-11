import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';

const TABLE_NAME = 'classrooms';

export class CreateClassrooms1697353265300 implements MigrationInterface {
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
            name: 'gradeId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which grade this class belongs to',
          },
          {
            name: 'section',
            type: 'varchar',
            length: '5',
            isNullable: false,
            comment: 'The section of grade',
          },
          {
            name: 'teacherId',
            type: 'bigint',
            isNullable: false,
            comment: 'The homeroom teacher of the class',
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
     * Create table index
     * */
    await queryRunner.createIndex(
      TABLE_NAME,
      new TableIndex({
        columnNames: ['schoolYearId', 'gradeId', 'section'],
        isUnique: true,
      }),
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
        columnNames: ['gradeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'grades',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['teacherId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
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
