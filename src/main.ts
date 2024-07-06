import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './config/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)

  SwaggerConfig(app, config.get<string>('APP_PREFIX'));

  app.useGlobalPipes(new ValidationPipe({ 
    forbidUnknownValues: false 
  }))
  await app.listen(config.get<string>('APP_PORT'));
}
bootstrap();
