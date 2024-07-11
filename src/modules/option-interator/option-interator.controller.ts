import { Controller } from '@nestjs/common';
import { OptionInteratorService } from './option-interator.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { OptionInterator } from 'src/entities/OptionInterator.entity';

@ApiTags('OPS INTERATOR API')
@Crud({
  model: { type: OptionInterator }
})
@Controller('backend/option-interator')
export class OptionInteratorController implements CrudController<OptionInterator> {
  constructor(public readonly service: OptionInteratorService) { }
}
