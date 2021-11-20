import { Body, Controller, Post } from '@nestjs/common';
import { OrderDto } from './dtos/order.dto';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('receber')
  async receber(@Body() order: OrderDto) {
    console.log(order);
    const job = await this.orderService.toQueue(order);
    console.log(job);
    return job.id;
  }
}
