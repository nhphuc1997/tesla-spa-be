import { Controller } from '@nestjs/common';
import { ProductImageService } from './product-image.service';
import { Crud, CrudController } from '@dataui/crud';
import { ProductImage } from 'src/entities/ProductImage.entity';

@Controller('product-image')
@Crud({
  model: { type: ProductImage }
})
export class ProductImageController implements CrudController<ProductImage> {
  constructor(public readonly service: ProductImageService) { }
}
