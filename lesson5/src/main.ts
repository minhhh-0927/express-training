import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {errorMiddleware} from "./middlewares/error.middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(errorMiddleware);
  await app.listen(3000);
}
bootstrap();
