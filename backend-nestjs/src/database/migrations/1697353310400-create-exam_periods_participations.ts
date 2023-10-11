import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';
import { StudentSubmissionStatus } from '../../modules/base/student-submission-status.type';

const TABLE_NAME = 'exam_periods_participations';

/**
 * Thể hiện mối quan hệ ca thì và những học sinh tham gia ca thi đó (quan hệ nhiều - nhiều)
 * */
export class CreateExamPeriodsParticipations1697353310400 implements MigrationInterface {
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
            name: 'examPeriodId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which exam period this record belongs to',
          },
          {
            name: 'studentId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which student this record belongs to',
          },
          {
            name: 'examSubmissionStatus',
            type: 'enum',
            enum: Object.values(StudentSubmissionStatus).map((type) => type.code),
            isNullable: false,
            comment: 'The submission status',
          },
          {
            name: 'score',
            type: 'decimal',
            isNullable: true,
            comment: 'The score',
          },
          {
            name: 'AnswerMetadata',
            type: 'json',
            isNullable: true,
            comment: 'The metadata JSON of answer',
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
        columnNames: ['examPeriodId', 'studentId'],
        isUnique: true,
      }),
    );

    /**
     * Create table foreign key
     * */
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['examPeriodId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exam_periods',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['studentId'],
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
