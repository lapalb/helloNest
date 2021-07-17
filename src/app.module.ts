import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';
import { logger } from './logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, CustomersController],
  providers: [AppService, CustomersService],
})
export class AppModule {}
