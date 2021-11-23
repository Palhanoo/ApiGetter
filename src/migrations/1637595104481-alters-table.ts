import {MigrationInterface, QueryRunner} from "typeorm";

export class altersTable1637595104481 implements MigrationInterface {
    name = 'altersTable1637595104481'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "harry_api" DROP COLUMN "eyeColor"`);
        await queryRunner.query(`ALTER TABLE "harry_api" DROP COLUMN "hairColor"`);
        await queryRunner.query(`ALTER TABLE "harry_api" ADD "eyeColour" character varying`);
        await queryRunner.query(`ALTER TABLE "harry_api" ADD "hairColour" character varying`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "house" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "dateOfBirth" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "yearOfBirth" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "ancestry" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "wandWood" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "wandCore" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "wandLength" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "patronus" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "actor" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "image" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "image" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "actor" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "patronus" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "wandLength" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "wandCore" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "wandWood" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "ancestry" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "yearOfBirth" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "dateOfBirth" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ALTER COLUMN "house" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" DROP COLUMN "hairColour"`);
        await queryRunner.query(`ALTER TABLE "harry_api" DROP COLUMN "eyeColour"`);
        await queryRunner.query(`ALTER TABLE "harry_api" ADD "hairColor" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "harry_api" ADD "eyeColor" character varying NOT NULL`);
    }

}
