import { Module } from '@nestjs/common';
import { OptionWheelService } from './option-wheel.service';
import { OptionWheelController } from './option-wheel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionWheel } from 'src/entities/OptionWheel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OptionWheel])
  ],
  controllers: [OptionWheelController],
  providers: [OptionWheelService],
})
export class OptionWheelModule {}
