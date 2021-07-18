import { Get, Param, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Customer } from './customer.interface';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) { }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Post()
  async create(): Promise<Customer[]> {
    return this.customersService.create();
  }
  @Get(':id')
  findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a #${params.id} customer`;
}

}
