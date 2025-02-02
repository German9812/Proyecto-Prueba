import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProductosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
