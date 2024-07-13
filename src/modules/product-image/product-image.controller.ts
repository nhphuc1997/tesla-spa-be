import { Controller } from '@nestjs/common';
import { ProductImageService } from './product-image.service';
import { Crud, CrudController } from '@dataui/crud';
import { ProductImage } from 'src/entities/ProductImage.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PRODUCT IMAGE API')
@Controller('backend/product-image')
@Crud({
  model: { type: ProductImage }
})
export class ProductImageController implements CrudController<ProductImage> {
  constructor(public readonly service: ProductImageService) { }
}
