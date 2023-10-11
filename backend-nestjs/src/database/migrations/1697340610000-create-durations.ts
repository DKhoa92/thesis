import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const TABLE_NAME = 'durations';

/**
 * Từ điển thời lượng, vd: 5 phút, 10 phút, 15 phút, ...
 * */
export class CreateDurations1697340610000 implements MigrationInterface {
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
            comment: 'The title of duration',
          },
          {
            name: 'valueInMinutes',
            type: 'int',
            isNullable: false,
            comment: 'The value in minutes',
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
