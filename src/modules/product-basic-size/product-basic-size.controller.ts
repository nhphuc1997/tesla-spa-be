import { Controller } from '@nestjs/common';
import { ProductBasicSizeService } from './product-basic-size.service';
import { Crud, CrudController } from '@dataui/crud';
import { ProductBasicSize } from 'src/entities/ProductBasicSize.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PRODUCT BASIC SIZE')
@Crud({model: {type: ProductBasicSize}})
@Controller('product-basic-sizes')
export class ProductBasicSizeController implements CrudController<ProductBasicSize>  {
  constructor(public readonly service: ProductBasicSizeService) {}
}
