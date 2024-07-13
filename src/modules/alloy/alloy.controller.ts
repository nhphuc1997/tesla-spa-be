import { Controller } from '@nestjs/common';
import { AlloyService } from './alloy.service';
import { Crud, CrudController } from '@dataui/crud';
import { Alloy } from 'src/entities/Alloy.entity';

@Controller('alloy')
@Crud({ model: { type: Alloy } })
export class AlloyController implements CrudController<Alloy> {
  constructor(public readonly service: AlloyService) { }
}
