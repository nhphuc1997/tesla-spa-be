import { Module } from '@nestjs/common';
import { AlloyService } from './alloy.service';
import { AlloyController } from './alloy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alloy } from 'src/entities/Alloy.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Alloy])
  ],
  controllers: [AlloyController],
  providers: [AlloyService],
})
export class AlloyModule { }
