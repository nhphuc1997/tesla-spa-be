import { Module } from '@nestjs/common';
import { RegistryDrivenService } from './registry-driven.service';
import { RegistryDrivenController } from './registry-driven.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistryDriven } from 'src/entities/RegistryDriven.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RegistryDriven])
  ],
  controllers: [RegistryDrivenController],
  providers: [RegistryDrivenService],
})
export class RegistryDrivenModule { }
