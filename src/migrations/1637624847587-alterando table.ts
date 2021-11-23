import {MigrationInterface, QueryRunner} from "typeorm";

export class alterandoTable1637624847587 implements MigrationInterface {
    name = 'alterandoTable1637624847587'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "harry_api" DROP COLUMN "yearOfBirth"`);
        await queryRunner.query(`ALTER TABLE "harry_api" ADD "yearOfBirth" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "harry_api" DROP COLUMN "yearOfBirth"`);
        await queryRunner.query(`ALTER TABLE "harry_api" ADD "yearOfBirth" integer`);
    }

}
