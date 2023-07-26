import { Controller, Get, Inject } from '@nestjs/common';
import { Subject } from 'rxjs';

@Controller('/users')
export class UsersController {
  constructor(@Inject('DYNAMIC') private store: Subject<unknown>) {
    const getDBInstance = async () => await this.store;
    getDBInstance();
  }
  @Get('/')
  getProfile() {
    return 'success';
  }
}
