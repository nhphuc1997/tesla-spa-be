import { Controller } from '@nestjs/common';
import { CarService } from './car.service';
import { Crud, CrudController } from '@dataui/crud';
import { Car } from 'src/entities/Car.entiry';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('CAR API')
@Crud({model: {type: Car}})
@Controller('car')
export class CarController implements CrudController<Car> {
  constructor(public readonly service: CarService) {}
}
