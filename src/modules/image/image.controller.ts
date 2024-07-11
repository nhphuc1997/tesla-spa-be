import { Controller } from '@nestjs/common';
import { ImageService } from './image.service';
import { Crud, CrudController } from '@dataui/crud';
import { Image } from 'src/entities/Image.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('IMAGE API')
@Controller('backend/images')
@Crud({
  model: { type: Image }
})
export class ImageController implements CrudController<Image> {
  constructor(public readonly service: ImageService) { }
}
