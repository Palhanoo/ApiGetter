import {MigrationInterface, QueryRunner} from "typeorm";

export class createTable1637548463998 implements MigrationInterface {
    name = 'createTable1637548463998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "harry_api" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "species" character varying NOT NULL, "gender" character varying NOT NULL, "house" character varying NOT NULL, "dateOfBirth" character varying NOT NULL, "yearOfBirth" integer NOT NULL, "wizard" boolean NOT NULL, "ancestry" character varying NOT NULL, "eyeColor" character varying NOT NULL, "hairColor" character varying NOT NULL, "wandWood" character varying NOT NULL, "wandCore" character varying NOT NULL, "wandLength" integer NOT NULL, "patronus" character varying NOT NULL, "hogwartsStudent" boolean NOT NULL, "hogwartsStaff" boolean NOT NULL, "actor" character varying NOT NULL, "alive" boolean NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_dceceba153519914b2783ee6c50" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "harry_api"`);
    }

}
