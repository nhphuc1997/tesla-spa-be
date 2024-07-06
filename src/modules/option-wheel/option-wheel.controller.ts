import { Controller } from '@nestjs/common';
import { OptionWheelService } from './option-wheel.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { OptionWheel } from 'src/entities/OptionWheel.entity';

@ApiTags('OPS WHEEL API')
@Crud({
  model: { type: OptionWheel }
})
@Controller('option-wheel')
export class OptionWheelController implements CrudController<OptionWheel> {
  constructor(public readonly service: OptionWheelService) { }
}
