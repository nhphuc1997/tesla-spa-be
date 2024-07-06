import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Banner } from 'src/entities/Banner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BannerServic extends TypeOrmCrudService<Banner> {
  constructor(@InjectRepository(Banner) repo: Repository<Banner>) {
    super(repo)
  }
}
