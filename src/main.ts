import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './config/swagger';
import { ConfigService } from '@nestjs/config';
import { SuccessInterceptor } from './interceptors/success';
import { ErrorsInterceptor } from './interceptors/error';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)

  SwaggerConfig(app, config.get<string>('APP_PREFIX'));

  app.useGlobalInterceptors(new SuccessInterceptor());
  app.useGlobalInterceptors(new ErrorsInterceptor());
  app.enableCors();

  await app.listen(config.get<string>('APP_PORT'));
}
bootstrap();
