import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductImage } from 'src/entities/ProductImage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductImageService extends TypeOrmCrudService<ProductImage> {
  constructor(@InjectRepository(ProductImage) repo: Repository<ProductImage>) {
    super(repo)
  }
}
