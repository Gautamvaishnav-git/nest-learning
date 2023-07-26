import { Controller, Get, Inject } from '@nestjs/common';
import { Subject } from 'rxjs';
import { UserStore } from './store/users.store';

@Controller('/users')
export class UsersController {
  constructor(private users: UserStore) {
    console.log(this.users);
    console.log('users init');
  }
  @Get('/')
  getProfile() {
    return 'success';
  }
}
