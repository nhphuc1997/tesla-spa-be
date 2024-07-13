import { Controller } from '@nestjs/common';
import { MaterialService } from './material.service';
import { Crud, CrudController } from '@dataui/crud';
import { Material } from 'src/entities/Material.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('MATERIAL API')
@Controller('material')
@Crud({
  model: { type: Material }
})
export class MaterialController implements CrudController<Material> {
  constructor(public readonly service: MaterialService) { }
}
