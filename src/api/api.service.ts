import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Queue } from 'bull';
import { Repository } from 'typeorm';
import { HarryApiDto } from './dtos/harryapi.dto';
import { HarryApi } from './Entities/Api.entity';

@Injectable()
export class ApiService {
  constructor(
    @InjectQueue('apiData')
    private apiDataQueue: Queue,
    @InjectRepository(HarryApi)
    private harryApiRepository: Repository<HarryApi>,
  ) {}

  async toQueue(harryApi: HarryApiDto) {
    const job = await this.apiDataQueue.add('data', harryApi);
    return job;
  }

  async getCharData(): Promise<void> {
    const headers = { 'Content-Type': 'application/json' };
    const { data } = await axios.get<HarryApiDto[]>(
      'http://hp-api.herokuapp.com/api/characters',
      {
        headers,
      },
    );
    for (let char of data) {
      await this.toQueue(char);
    }
  }

  async listChars(): Promise<HarryApi[]> {
    const CharData = await this.harryApiRepository.find();
    return CharData;
  }
}
