import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  try {
    const PORT = 3000 || 3002;
    const app = await NestFactory.create(AppModule);

    app.enableCors({
      credentials: true,
    });

    await app.listen(PORT, () => {
      console.log(`Server started at ${PORT} port`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
