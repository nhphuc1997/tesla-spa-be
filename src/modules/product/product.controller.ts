import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { Crud, CrudController } from '@dataui/crud';
import { Product } from 'src/entities/Product.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PRODUCT API')
@Controller('products')
@Crud({
  model: { type: Product },
  query: {
    join: {
      productBasicParam: { eager: true },
      productBasicSize: { eager: true },
      productBasicEngine: { eager: true },
      category: { eager: true },
      images: { eager: true },
      colorGroup: { eager: true },
    }
  }
})
export class ProductController implements CrudController<Product> {
  constructor(public readonly service: ProductService) {}
}
