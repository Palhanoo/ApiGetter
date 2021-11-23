import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    BullModule.forRoot({
      redis: {
        name: 'redis-contoured-68625',
        host: 'ec2-3-213-148-22.compute-1.amazonaws.com',
        port: 8049,
        password:
          'p289ed67dc121b1d812f9f69aaff56fefffdc8595b46e673bc84789cc9ed5f033',
      },
    }),
    ApiModule,
  ],
})
export class AppModule {}
