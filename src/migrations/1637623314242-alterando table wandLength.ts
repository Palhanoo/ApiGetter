import {MigrationInterface, QueryRunner} from "typeorm";

export class alterandoTableWandLength1637623314242 implements MigrationInterface {
    name = 'alterandoTableWandLength1637623314242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "harry_api" DROP COLUMN "wandLength"`);
        await queryRunner.query(`ALTER TABLE "harry_api" ADD "wandLength" numeric`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "harry_api" DROP COLUMN "wandLength"`);
        await queryRunner.query(`ALTER TABLE "harry_api" ADD "wandLength" double precision`);
    }

}
