import { Module } from '@nestjs/common';
import { ProductImageService } from './product-image.service';
import { ProductImageController } from './product-image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImage } from 'src/entities/ProductImage.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductImage])
  ],
  controllers: [ProductImageController],
  providers: [ProductImageService],
})
export class ProductImageModule { }
