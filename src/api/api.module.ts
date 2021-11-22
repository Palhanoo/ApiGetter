import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'apiData',
    }),
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
