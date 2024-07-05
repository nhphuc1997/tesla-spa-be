import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const SwaggerConfig = (app: INestApplication, serviceName: string) => {
  const config = new DocumentBuilder()
    .setTitle(`${serviceName}`)
    .setDescription(`The ${serviceName} collection api`)
    .setVersion('1.0.0')
    // .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${serviceName}/api`, app, document);
};
