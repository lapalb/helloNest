import { Injectable } from '@nestjs/common';
import { Customer } from './customer.interface';
@Injectable()
export class CustomersService {
  private readonly customers: Customer[] = [
    { name: 'John', age: 30},
    { name: 'Mary', age: 25 },
    { name: 'Mike', age: 32 },
    { name: 'Sally', age: 21 },
    { name: 'Ben', age: 22 },
    { name: 'Mark', age: 21 },
    { name: 'Sue', age: 24 },
    { name: 'Jane', age: 23 },
    { name: 'Ben', age: 22 },
    { name: 'Mike', age: 32 },
    { name: 'Sue', age: 24 },
  ];

  findAll() {
    return this.customers;
  }
}
