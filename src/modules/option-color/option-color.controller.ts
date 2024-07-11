import { Controller } from '@nestjs/common';
import { OptionColorService } from './option-color.service';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { OptionColor } from 'src/entities/OptionColor.entity';

@ApiTags('OPS COLOR API')
@Crud({
  model: { type: OptionColor }
})
@Controller('backend/option-color')
export class OptionColorController implements CrudController<OptionColor> {
  constructor(public readonly service: OptionColorService) { }
}
