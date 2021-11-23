import {MigrationInterface, QueryRunner} from "typeorm";

export class testeFinalAlterandoTable1637624772246 implements MigrationInterface {
    name = 'testeFinalAlterandoTable1637624772246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "harry_api" DROP COLUMN "wandLength"`);
        await queryRunner.query(`ALTER TABLE "harry_api" ADD "wandLength" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "harry_api" DROP COLUMN "wandLength"`);
        await queryRunner.query(`ALTER TABLE "harry_api" ADD "wandLength" numeric`);
    }

}
