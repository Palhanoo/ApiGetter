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

  @Column()
  house: string;

  @Column()
  dateOfBirth: string;

  @Column()
  yearOfBirth: number;

  @Column()
  wizard: boolean;

  @Column()
  ancestry: string;

  @Column()
  eyeColor: string;

  @Column()
  hairColor: string;

  @Column()
  wandWood: string;

  @Column()
  wandCore: string;

  @Column()
  wandLength: number;

  @Column()
  patronus: string;

  @Column()
  hogwartsStudent: boolean;

  @Column()
  hogwartsStaff: boolean;

  @Column()
  actor: string;

  @Column()
  alive: boolean;

  @Column()
  image: string;
}
