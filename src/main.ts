import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger()
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true
    })
  )
  app.enableCors()
  await app.listen(3000);
  logger.log(`Server ready on port: ${await app.getUrl()}`)
}
bootstrap();
