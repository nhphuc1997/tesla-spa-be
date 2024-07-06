import { Controller } from '@nestjs/common';
import { CustomerDemandService } from './customer-demand.service';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { CustomerDemand } from 'src/entities/CustomerDemand.entity';

@ApiTags('CUSTOMER DEMAND API')
@Crud({
  model: { type: CustomerDemand }
})
@Controller('customer-demands')
export class CustomerDemandController implements CrudController<CustomerDemand> {
  constructor(public readonly service: CustomerDemandService) { }
}
