import { Module } from '@nestjs/common';
import { InteriorService } from './interior.service';
import { InteriorController } from './interior.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interior } from 'src/entities/Interior.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Interior])
  ],
  controllers: [InteriorController],
  providers: [InteriorService],
})
export class InteriorModule { }
