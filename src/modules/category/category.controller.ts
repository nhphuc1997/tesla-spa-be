import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { Category } from 'src/entities/Category.entity';
import { Crud, CrudController } from '@dataui/crud';

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
@Controller('tesla-service/categories')
export class CategoryController implements CrudController<Category> {
  constructor(public readonly service: CategoryService) { }
}
