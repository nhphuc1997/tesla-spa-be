import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from 'src/entities/Image.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Image])
  ],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
