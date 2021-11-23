import {
  Processor,
  Process,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueResumed,
} from '@nestjs/bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { Repository } from 'typeorm';
import { ApiService } from './api.service';
import { HarryApi } from './Entities/Api.entity';

@Processor({ name: 'apiData' })
export class DataProcessor {
  constructor(
    private readonly apiService: ApiService,
    @InjectRepository(HarryApi)
    private readonly harryApiRepository: Repository<HarryApi>,
  ) {}

  @Process({ name: 'data' })
  @OnQueueCompleted()
  async onCompleted(job: Job): Promise<void> {
    const { data } = job;

    const {
      name,
      species,
      gender,
      house,
      dateOfBirth,
      yearOfBirth,
      wizard,
      ancestry,
      eyeColour,
      hairColour,
      patronus,
      hogwartsStudent,
      hogwartsStaff,
      actor,
      alive,
      image,
    } = data;
    const { wood: wandWood, core: wandCore, length: wandLength } = data.wand;

    try {
      const saveInBank = await this.harryApiRepository.save({
        name,
        species,
        gender,
        house,
        dateOfBirth,
        yearOfBirth,
        wizard,
        ancestry,
        eyeColour,
        hairColour,
        wandWood,
        wandCore,
        wandLength,
        patronus,
        hogwartsStudent,
        hogwartsStaff,
        actor,
        alive,
        image,
      });
      console.log(`salvando o ${job.id}`);
      return;
    } catch (err) {
      console.log(err);
    }
  }
}
