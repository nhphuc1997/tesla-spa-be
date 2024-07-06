import { Module } from '@nestjs/common';
import { ProductBasicEngineService } from './product-basic-engine.service';
import { ProductBasicEngineController } from './product-basic-engine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBasicEngine } from 'src/entities/ProductBasicEngine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductBasicEngine])],
  controllers: [ProductBasicEngineController],
  providers: [ProductBasicEngineService],
  exports: [ProductBasicEngineService]
})
export class ProductBasicEngineModule {}
