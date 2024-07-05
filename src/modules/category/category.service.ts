import { CrudService } from '@nestjs-library/crud';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/models/Category.model';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService extends CrudService<Category> {
  constructor(@InjectRepository(Category) repository: Repository<Category>) {
    super(repository)
  }
}
