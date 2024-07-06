import { Controller } from '@nestjs/common';
import { ColorGroupService } from './color-group.service';
import { Crud, CrudController } from '@dataui/crud';
import { ColorGroup } from 'src/entities/ColorGroup.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('COLOR GROUP API')
@Crud({
  model: { type: ColorGroup }
})
@Controller('color-groups')
export class ColorGroupController implements CrudController<ColorGroup> {
  constructor(public readonly service: ColorGroupService) {}
}
