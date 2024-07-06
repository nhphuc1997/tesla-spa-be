import { Module } from '@nestjs/common';
import { ColorGroupService } from './color-group.service';
import { ColorGroupController } from './color-group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorGroup } from 'src/entities/ColorGroup.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ColorGroup])
  ],
  controllers: [ColorGroupController],
  providers: [ColorGroupService],
})
export class ColorGroupModule {}
