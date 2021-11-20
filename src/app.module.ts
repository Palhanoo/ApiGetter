import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    BullModule.forRoot({
      redis: {
        name: 'redis-objective-86158',
        host: 'ec2-54-167-58-171.compute-1.amazonaws.com',
        port: 32070,
        password:
          'pc7295d02a8e7149e2a4ef9a6cdbe156999bbd62329831951b541faf57766ee16',
      },
    }),
    OrderModule,
  ],
})
export class AppModule {}
