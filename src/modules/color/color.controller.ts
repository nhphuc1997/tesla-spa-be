import { Controller } from '@nestjs/common';
import { ColorService } from './color.service';
import { Crud, CrudController } from '@dataui/crud';
import { Color } from 'src/entities/Color.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('COLOR API')
@Crud({
  model: { type: Color },
  query: {
    join: {
      product: { eager: true }
    }
  }
})
@Controller('color')
export class ColorController implements CrudController<Color> {
  constructor(public readonly service: ColorService) {}
}
