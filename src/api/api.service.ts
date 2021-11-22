import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Queue } from 'bull';
import { HarryApiDto } from './dtos/harryapi.dto';

@Injectable()
export class ApiService {
  constructor(
    @InjectQueue('apiData')
    private apiDataQueue: Queue,
  ) {}

  async toQueue(harryApi: HarryApiDto) {
    const job = await this.apiDataQueue.add('data', harryApi);
    return job;
  }

  async getData() {
    const headers = { 'Content-Type': 'application/json' };
    const { data } = await axios.get<HarryApiDto>(
      'http://hp-api.herokuapp.com/api/characters',
      {
        headers,
      },
    );
    for (let i = 0; i < 290; i++) {
      const character = data[i];
      const job = await this.toQueue(character);
      console.log(job);
      return job;
    }
  }
}
