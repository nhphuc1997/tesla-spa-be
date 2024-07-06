import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ColorGroup } from 'src/entities/ColorGroup.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColorGroupService extends TypeOrmCrudService<ColorGroup> {
  constructor(@InjectRepository(ColorGroup) repo: Repository<ColorGroup>) {
    super(repo)
  }
}
