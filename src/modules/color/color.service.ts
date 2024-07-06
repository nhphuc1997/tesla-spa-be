import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from 'src/entities/Color.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColorService extends TypeOrmCrudService<Color> {
  constructor(@InjectRepository(Color) repo: Repository<Color>) {
    super(repo)
  }
}
