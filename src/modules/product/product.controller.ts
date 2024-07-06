import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { Crud, CrudController } from '@dataui/crud';
import { Product } from 'src/entities/Product.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PRODUCT API')
@Controller('products')
@Crud({model: {type: Product}})
export class ProductController implements CrudController<Product> {
  constructor(public readonly service: ProductService) {}
}
