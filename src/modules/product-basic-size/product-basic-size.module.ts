import { Module } from '@nestjs/common';
import { ProductBasicSizeService } from './product-basic-size.service';
import { ProductBasicSizeController } from './product-basic-size.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBasicSize } from 'src/entities/ProductBasicSize.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductBasicSize])
  ],
  controllers: [ProductBasicSizeController],
  providers: [ProductBasicSizeService],
})
export class ProductBasicSizeModule {}
