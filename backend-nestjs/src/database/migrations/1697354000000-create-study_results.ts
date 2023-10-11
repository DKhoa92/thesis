import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';
import { StudentSubmissionStatus } from '../../modules/base/student-submission-status.type';

const TABLE_NAME = 'study_reults';

/**
 * Kết quả học tập của toàn bộ học sinh theo từng năm
 * */
export class CreateStudyResults1697354000000 implements MigrationInterface {
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
            comment: 'Determine which school year this record belongs to',
          },
          {
            name: 'studentId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which student this record belongs to',
          },
          {
            name: 'subjectId',
            type: 'bigint',
            isNullable: false,
            comment: 'Determine which subject this record belongs to',
          },
          {
            name: 'midtermScore1',
            type: 'decimal',
            isNullable: true,
            comment: 'The score of midterm 1',
          },
          {
            name: 'finalScore1',
            type: 'decimal',
            isNullable: true,
            comment: 'The score of final 1',
          },
          {
            name: 'midtermScore2',
            type: 'decimal',
            isNullable: true,
            comment: 'The score of midterm 2',
          },
          {
            name: 'finalScore2',
            type: 'decimal',
            isNullable: true,
            comment: 'The score of final 2',
          },
          {
            name: 'finalScore',
            type: 'decimal',
            isNullable: true,
            comment: 'The final score',
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
        columnNames: ['schoolYearId', 'studentId', 'subjectId'],
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
