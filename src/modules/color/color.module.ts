import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Color } from 'src/entities/Color.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Color])
  ],
  controllers: [ColorController],
  providers: [ColorService],
})
export class ColorModule {}
