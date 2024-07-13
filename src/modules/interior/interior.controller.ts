import { Controller } from '@nestjs/common';
import { InteriorService } from './interior.service';
import { Crud, CrudController } from '@dataui/crud';
import { Interior } from 'src/entities/Interior.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('INTERIOR API')
@Controller('backend/interior')
@Crud({
  model: { type: Interior }
})
export class InteriorController implements CrudController<Interior> {
  constructor(public readonly service: InteriorService) { }
}
