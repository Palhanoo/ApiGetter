import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HarryApi {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  gender: string;

  @Column({ nullable: true })
  house: string;

  @Column({ nullable: true })
  dateOfBirth: string;

  @Column({ nullable: true })
  yearOfBirth: number;

  @Column()
  wizard: boolean;

  @Column({ nullable: true })
  ancestry: string;

  @Column({ nullable: true })
  eyeColour: string;

  @Column({ nullable: true })
  hairColour: string;

  @Column({ nullable: true })
  wandWood: string;

  @Column({ nullable: true })
  wandCore: string;

  @Column({ nullable: true })
  wandLength: number;

  @Column({ nullable: true })
  patronus: string;

  @Column()
  hogwartsStudent: boolean;

  @Column()
  hogwartsStaff: boolean;

  @Column({ nullable: true })
  actor: string;

  @Column()
  alive: boolean;

  @Column({ nullable: true })
  image: string;
}
