import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { HarryApiDto } from './dtos/harryapi.dto';
import { HarryApi } from './Entities/Api.entity';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('receber')
  async receber(@Body() harryApi: HarryApiDto) {
    await this.apiService.toQueue(harryApi);
  }

  @Get('data')
  async pegar(): Promise<void> {
    await this.apiService.getCharData();
  }

  @Get('chars')
  async listar(): Promise<HarryApi[]> {
    return await this.apiService.listChars();
  }
}
