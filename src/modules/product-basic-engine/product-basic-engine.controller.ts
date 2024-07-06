import { Controller } from '@nestjs/common';
import { ProductBasicEngineService } from './product-basic-engine.service';
import { Crud, CrudController } from '@dataui/crud';
import { ProductBasicEngine } from 'src/entities/ProductBasicEngine.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PRODUCT BASIC ENGINE API')
@Crud({ model: { type: ProductBasicEngine } })
@Controller('product-basic-engines')
export class ProductBasicEngineController implements CrudController<ProductBasicEngine> {
  constructor(public readonly service: ProductBasicEngineService) {}
}
