import { Module } from '@nestjs/common';
import { BannerController } from './banner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banner } from 'src/entities/Banner.entity';
import { BannerServie } from './banner.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Banner])
  ],
  controllers: [BannerController],
  providers: [BannerServie],
  exports: [BannerServie]
})
export class BannerModule {}
