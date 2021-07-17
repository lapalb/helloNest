import { NestFactory } from '@nestjs/core';
import { logger } from 'src/logger.middleware';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
