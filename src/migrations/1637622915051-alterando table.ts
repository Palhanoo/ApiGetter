import { MigrationInterface, QueryRunner } from 'typeorm';

export class alterandoTable1637622915051 implements MigrationInterface {
  name = 'alterandoTable1637622915051';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "harry_api" DROP COLUMN "wandLength"`);
    await queryRunner.query(
      `ALTER TABLE "harry_api" ADD "wandLength" double precision`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "harry_api" DROP COLUMN "wandLength"`);
    await queryRunner.query(`ALTER TABLE "harry_api" ADD "wandLength" integer`);
  }
}
