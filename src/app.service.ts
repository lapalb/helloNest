import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 
  getHello(): string {
    return 'Hello World!';
  }
  getAshish(): string {
    return 'Ashish';
  }
}
