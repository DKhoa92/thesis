import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';
import { MediaType } from '../../modules/base/media-type.type';
import { QuestionSetSubmissionStatus } from '../../modules/base/question-set-submission-status.type';

const TABLE_NAME = 'exam_question_set_submissions';

/**
 * Giáo viên nộp bộ đề thi cho từng kỳ thi để đợi xét duyệt
 * */
export class CreateExamQuestionSetSubmissions1697353310250 implements MigrationInterface {
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
            name: 'examId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which exam this record belongs to',
          },
          {
            name: 'questionSetId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which question set this record belongs to',
          },
          {
            name: 'status',
            type: 'enum',
            enum: Object.values(QuestionSetSubmissionStatus).map((type) => type.code),
            isNullable: false,
            comment: 'The status',
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
        columnNames: ['examId', 'questionSetId'],
        isUnique: true,
      }),
    );

    /**
     * Create table foreign key
     * */
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['examId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exams',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      TABLE_NAME,
      new TableForeignKey({
        columnNames: ['questionSetId'],
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
