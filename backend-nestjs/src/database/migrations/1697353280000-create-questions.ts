import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
import { QuestionType } from '../../modules/base/types/question-type.type';
import { tr } from '@faker-js/faker';

const TABLE_NAME = 'questions';

export class CreateQuestions1697353280000 implements MigrationInterface {
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
                        name: 'subjectId',
                        type: 'bigint',
                        isNullable: false,
                        comment: 'Determine which subject this question belongs to',
                    },
                    {
                        name: 'type',
                        type: 'enum',
                        enum: Object.values(QuestionType).map((type) => type.code),
                        isNullable: false,
                        comment: 'The question type',
                    },
                    {
                        name: 'contentHtml',
                        type: 'text',
                        isNullable: false,
                        comment: 'The content of question format as HTML code',
                    },
                    {
                        name: 'answerConfigJson',
                        type: 'json',
                        isNullable: false,
                        comment: 'The answer config as JSON format',
                    },
                    {
                        name: 'isLockingEdit',
                        type: 'boolean',
                        isNullable: false,
                        comment: 'Used to allow editing or not',
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
