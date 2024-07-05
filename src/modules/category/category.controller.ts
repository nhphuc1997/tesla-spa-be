import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Crud, CrudController } from '@nestjs-library/crud';
import { Category } from 'src/models/Category.model';

@Crud({entity: Category})
@Controller('category')
export class CategoryController implements CrudController<Category> {
  constructor(public readonly crudService: CategoryService) {}
}
