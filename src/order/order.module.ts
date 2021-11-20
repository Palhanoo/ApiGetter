import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'orderRaw',
    }),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
