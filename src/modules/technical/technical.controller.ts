import { Controller } from '@nestjs/common';
import { TechnicalService } from './technical.service';
import { Crud, CrudController } from '@dataui/crud';
import { Technical } from 'src/entities/Technical.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('TECHNICAL API')
@Controller('car/backend/technical')
@Crud({
  model: { type: Technical }
})
export class TechnicalController implements CrudController<Technical> {
  constructor(public readonly service: TechnicalService) { }
}
