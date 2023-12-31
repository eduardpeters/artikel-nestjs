import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT');
  const CORS_ORIGIN = configService.get('CORS_ORIGIN');
  app.enableCors({ origin: CORS_ORIGIN });
  app.enableShutdownHooks();
  await app.listen(PORT);
}
bootstrap();
