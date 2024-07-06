import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { Category } from 'src/models/Category.model';

@ApiTags('CATEGORY API')
@Crud({model: {type: Category}})
@Controller('category')
export class CategoryController{
  constructor(public readonly crudService: CategoryService) {}
}
