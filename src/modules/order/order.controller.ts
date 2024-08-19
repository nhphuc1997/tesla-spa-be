import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Order } from 'src/entities/Order.entity';

@ApiTags('ORDER API')
@Crud({
  model: { type: Order },
  query: {
    join: {
      product: { eager: true },
      interior: { eager: true },
      exterior: { eager: true },
      alloy: { eager: true },
    }
  }
})
@Controller('car/backend/orders')
export class OrderController implements CrudController<Order> {
  constructor(public readonly service: OrderService) { }
}
