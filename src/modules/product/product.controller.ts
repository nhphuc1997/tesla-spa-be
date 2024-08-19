import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { Product } from 'src/entities/Product.entity';

@ApiTags('PRODUCT API')
@Controller('car/backend/products')
@Crud({
  model: { type: Product },
  query: {
    join: {
      category: { eager: true },
      colorGroup: { eager: true },
      technical: { eager: true },
      images: { eager: true }
    }
  }
})
export class ProductController implements CrudController<Product> {
  constructor(public readonly service: ProductService) { }
}
