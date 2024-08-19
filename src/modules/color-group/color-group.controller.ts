import { Controller } from '@nestjs/common';
import { ColorGroupService } from './color-group.service';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { ColorGroup } from 'src/entities/ColorGroup.entity';

@ApiTags('COLOR GROUP API')
@Crud({
  model: { type: ColorGroup }
})
@Controller('car/backend/color-groups')
export class ColorGroupController implements CrudController<ColorGroup> {
  constructor(public readonly service: ColorGroupService) { }
}
