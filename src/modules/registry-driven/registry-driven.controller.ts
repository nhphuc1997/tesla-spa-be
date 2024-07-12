import { Controller } from '@nestjs/common';
import { RegistryDrivenService } from './registry-driven.service';
import { Crud, CrudController } from '@dataui/crud';
import { RegistryDriven } from 'src/entities/RegistryDriven.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('REGISTRY DRIVEN API')
@Crud({
  model: { type: RegistryDriven }
})
@Controller('backend/registry-driven')
export class RegistryDrivenController implements CrudController<RegistryDriven> {
  constructor(public readonly service: RegistryDrivenService) { }
}
