import { Controller } from '@nestjs/common';
import { ProductBasicEngineService } from './product-basic-engine.service';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { ProductBasicEngine } from 'src/entities/ProductBasicEngine.entity';

@ApiTags('PRODUCT BASIC ENGINE API')
@Crud({ model: { type: ProductBasicEngine } })
@Controller('backend/product-basic-engines')
export class ProductBasicEngineController implements CrudController<ProductBasicEngine> {
  constructor(public readonly service: ProductBasicEngineService) { }
}
