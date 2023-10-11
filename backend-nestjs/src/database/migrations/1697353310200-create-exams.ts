import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';

const TABLE_NAME = 'exams';

/**
 * Kỳ thi
 * */
export class CreateExams1697353310200 implements MigrationInterface {
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
            name: 'yearSemesterId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which year-semester this exam belongs to',
          },
          {
            name: 'gradeId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which grade this exam belongs to',
          },
          {
            name: 'subjectId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which subject this exam belongs to',
          },
          {
            name: 'examTypeId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which exam type this exam belongs to',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '200',
            isNullable: false,
            comment: 'The name of exam',
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
            name: 'durationId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine duration for this exam',
          },
          {
            name: 'usingQuestionSetId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine the question set used',
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
        columnNames: ['yearSemesterId', 'gradeId', 'subjectId', 'examTypeId'],
        isUnique: true,
      }),
    );

    /**
     * Create table foreign key
     * */
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['yearSemesterId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'year_semesters',
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
        columnNames: ['examTypeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exam_types',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['subjectId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'subjects',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['durationId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'durations',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['usingQuestionSetId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'question_sets',
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
