import { Controller } from '@nestjs/common';
import { ProductBasicParamService } from './product-basic-param.service';
import { Crud, CrudController } from '@dataui/crud';
import { ProductBasicParam } from 'src/entities/ProductBasicParam.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PRODUCT BASIC PARAM API')
@Crud({ model: { type: ProductBasicParam } })
@Controller('tesla-service/product-basic-params')
export class ProductBasicParamController implements CrudController<ProductBasicParam> {
  constructor(public readonly service: ProductBasicParamService) { }
}
