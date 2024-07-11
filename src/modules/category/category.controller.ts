import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Category } from 'src/entities/Category.entity';

@ApiTags('CATEGORY API')
@Crud({
  model: { type: Category },
  query: {
    join: {
      optionColor: { eager: true },
      optionWheel: { eager: true },
      optionInterator: { eager: true },
    }
  }
})
@Controller('backend/categories')
export class CategoryController implements CrudController<Category> {
  constructor(public readonly service: CategoryService) { }
}
