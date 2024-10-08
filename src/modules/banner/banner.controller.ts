import { Controller } from '@nestjs/common';
import { Banner } from 'src/entities/Banner.entity';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { BannerServie } from './banner.service';

@ApiTags('BANNER API')
@Crud({ model: { type: Banner } })
@Controller('car/backend/banners')
export class BannerController implements CrudController<Banner> {
  constructor(public readonly service: BannerServie) { }
}
