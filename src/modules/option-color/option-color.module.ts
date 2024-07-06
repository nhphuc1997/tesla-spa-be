import { Module } from '@nestjs/common';
import { OptionColorService } from './option-color.service';
import { OptionColorController } from './option-color.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionColor } from 'src/entities/OptionColor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OptionColor])
  ],
  controllers: [OptionColorController],
  providers: [OptionColorService],
})
export class OptionColorModule {}
