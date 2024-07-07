import { Controller } from '@nestjs/common';
import { OptionColorService } from './option-color.service';
import { Crud, CrudController } from '@dataui/crud';
import { OptionColor } from 'src/entities/OptionColor.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('OPS COLOR API')
@Crud({
  model: { type: OptionColor }
})
@Controller('tesla-service/option-color')
export class OptionColorController implements CrudController<OptionColor> {
  constructor(public readonly service: OptionColorService) { }
}
