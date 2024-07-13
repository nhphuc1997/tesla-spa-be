import { Controller } from '@nestjs/common';
import { TechnicalService } from './technical.service';
import { Crud, CrudController } from '@dataui/crud';
import { Technical } from 'src/entities/Technical.entity';

@Controller('technical')
@Crud({
  model: { type: Technical }
})
export class TechnicalController implements CrudController<Technical> {
  constructor(public readonly service: TechnicalService) { }
}
