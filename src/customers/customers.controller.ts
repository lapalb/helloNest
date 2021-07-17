import { Get } from '@nestjs/common';
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

}
