import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { BullModule } from '@nestjs/bull';
import { DataProcessor } from './processor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HarryApi } from './Entities/Api.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([HarryApi]),
    BullModule.registerQueue({
      name: 'apiData',
    }),
  ],
  controllers: [ApiController],
  providers: [ApiService, DataProcessor],
})
export class ApiModule {}
