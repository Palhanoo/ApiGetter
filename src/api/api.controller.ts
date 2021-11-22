import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { HarryApiDto } from './dtos/harryapi.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('receber')
  async receber(@Body() harryApi: HarryApiDto) {
    console.log(harryApi);
    const job = await this.apiService.toQueue(harryApi);
    console.log(job);
    return job.id;
  }

  @Get('data')
  async pegar(): Promise<void> {
    await this.apiService.getData();
  }
}
