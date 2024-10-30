import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { SwaggerHelper } from './common/helpers/swagger.helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('March-2024 NestJS')
    .setDescription('March-2024 NestJS API description')
    .setVersion('1.0')
    .addBearerAuth({
      in: 'header',
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerHelper.setDefaultResponses(document);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      docExpansion: 'none', //як буде розгорнуто чи згорното swagger
      defaultModelsExpandDepth: 7,
      persistAuthorization: true, // Це для збереження токена
    },
  });

  const port = 3000;
  const host = 'localhost';

  await app.listen(3000, () => {
    console.log(`Server started on http://${host}:${port}`);
    console.log(`Swagger server started on http://${host}:${port}/docs`);
  });
}
void bootstrap();
