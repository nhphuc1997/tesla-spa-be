import { Module } from '@nestjs/common';
import { OptionInteratorService } from './option-interator.service';
import { OptionInteratorController } from './option-interator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionInterator } from 'src/entities/OptionInterator.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OptionInterator])
  ],
  controllers: [OptionInteratorController],
  providers: [OptionInteratorService],
})
export class OptionInteratorModule {}
