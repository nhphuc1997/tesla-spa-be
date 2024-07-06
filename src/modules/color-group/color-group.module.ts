import { Module } from '@nestjs/common';
import { ColorGroupService } from './color-group.service';
import { ColorGroupController } from './color-group.controller';

@Module({
  controllers: [ColorGroupController],
  providers: [ColorGroupService],
})
export class ColorGroupModule {}
