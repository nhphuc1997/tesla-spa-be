import { Controller } from '@nestjs/common';
import { ProductBasicParamService } from './product-basic-param.service';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { ProductBasicParam } from 'src/entities/ProductBasicParam.entity';

@ApiTags('PRODUCT BASIC PARAM API')
@Crud({ model: { type: ProductBasicParam } })
@Controller('backend/product-basic-params')
export class ProductBasicParamController implements CrudController<ProductBasicParam> {
  constructor(public readonly service: ProductBasicParamService) { }
}
