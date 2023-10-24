import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
import { MediaType } from '../../modules/base/types/media-type.type';
import { MediaMimeType } from '../../modules/base/types/media-mime-type.type';

const TABLE_NAME = 'medias';

export class CreateMedias1697340600000 implements MigrationInterface {
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
                        name: 'type',
                        type: 'enum',
                        enum: Object.values(MediaType).map((type) => type.code),
                        isNullable: false,
                        comment: 'The media type',
                    },
                    {
                        name: 'mimeType',
                        type: 'enum',
                        enum: Object.values(MediaMimeType).map((type) => type.code),
                        isNullable: false,
                        comment: 'The media MIME type',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '200',
                        isNullable: true,
                        comment: 'The name',
                    },
                    {
                        name: 'alt',
                        type: 'varchar',
                        length: '200',
                        isNullable: true,
                        comment: 'The alternative text',
                    },
                    {
                        name: 'link',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                        comment: 'The link to media file',
                    },
                    {
                        name: 'thumbnailLink',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                        comment: 'The thumbnail link to media file',
                    },
                    {
                        name: 'metadata',
                        type: 'json',
                        isNullable: true,
                        comment: 'The metadata JSON',
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
