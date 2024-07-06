import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Category } from 'src/entities/Category.entity';

@ApiTags('CATEGORY API')
@Crud({model: {type: Category}})
@Controller('category')
export class CategoryController implements CrudController<Category>{
  constructor(public readonly service: CategoryService) {}
}
