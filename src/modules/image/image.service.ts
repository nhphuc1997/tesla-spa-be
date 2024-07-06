import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from 'src/entities/Image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService extends TypeOrmCrudService<Image> {
  constructor(@InjectRepository(Image) repo: Repository<Image>) {
    super(repo)
  }
}
