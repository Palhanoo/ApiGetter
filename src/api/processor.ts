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
  @OnQueueActive()
  async onActive(job: Job) {
    const { data } = job;
    console.log(data);
  }

  @OnQueueResumed()
  async onCompleted(job: Job): Promise<void> {
    const { data } = job;

    const {
      name,
      species,
      gender,
      house,
      dateOfBirth,
      yearOfBirth,
      ancestry,
      eyeColour,
      hairColour,
      patronus,
      actor,
      image,
    } = data;
    let wizard = data.wizard;
    let hogwartsStudent = data.hogwartsStudent;
    let hogwartsStaff = data.hogwartsStaff;
    let alive = data.alive;
    const { wood: wandWood, core: wandCore, length: wandLength } = data.wand;
    console.log(`salvando o ${job.id}`);
    switch (data.wizard) {
      case '1':
        data.wizard = true;
        break;
      case '0':
        data.wizard = false;
        break;
    }
    switch (data.hogwartsStudent) {
      case '1':
        data.hogwartsStudent = true;
        break;
      case '0':
        data.hogwartsStudent = false;
        break;
    }
    switch (data.hogwartsStaff) {
      case '1':
        data.hogwartsStaff = true;
        break;
      case '0':
        data.hogwartsStaff = false;
        break;
    }
    switch (data.alive) {
      case '1':
        data.alive = true;
        break;
      case '0':
        data.alive = false;
        break;
    }
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
      return;
    } catch (err) {
      console.log(err);
    }
  }
}
