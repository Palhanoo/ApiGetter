import { Queue } from 'bull';
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { OrderDto } from './dtos/order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectQueue('orderRaw') private orderQueue: Queue) {}

  async toQueue(order: OrderDto) {
    return await this.orderQueue.add('raw', order);
  }
}
