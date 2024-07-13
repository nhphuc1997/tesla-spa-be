import { Controller } from '@nestjs/common';
import { ExteriorService } from './exterior.service';
import { Crud, CrudController } from '@dataui/crud';
import { Exterior } from 'src/entities/Exterior.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('EXTERIOR API')
@Controller('backend/exterior')
@Crud({
  model: { type: Exterior }
})
export class ExteriorController implements CrudController<Exterior> {
  constructor(public readonly service: ExteriorService) { }
}
